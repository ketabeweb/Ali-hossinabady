// Web Audio API ambient tone & soothing sound generator
// Guarantees zero-network-dependency playback for meditation, relaxation, and voice intros

class AudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying = false;
  private currentTrackId: string | null = null;
  private oscillators: OscillatorNode[] = [];
  private noiseNode: AudioBufferSourceNode | null = null;
  private intervalId: number | null = null;

  public init() {
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtxClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playTrack(trackId: string, onUpdate?: (seconds: number) => void) {
    this.stop();
    this.init();
    if (!this.ctx || !this.masterGain) return;

    this.isPlaying = true;
    this.currentTrackId = trackId;

    // Frequencies tailored for healing, soothing, alpha brainwaves
    const freqMap: Record<string, number[]> = {
      'track-1': [432, 528, 216], // Solfeggio / miracle healing tones for gratitude
      'track-2': [396, 432, 198], // Release fear and guilt / root healing
      'track-3': [528, 639, 264], // Transformation and positive relationships (CBT)
      'track-4': [417, 528, 285]  // Undoing situations and cognitive clarity
    };

    const freqs = freqMap[trackId] || [432, 528, 216];

    // Create soothing polyphonic pad oscillators
    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Low pass warm filter
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800 + idx * 200, this.ctx.currentTime);

      // Soft envelope
      const targetGain = 0.15 / (idx + 1);
      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(targetGain, this.ctx.currentTime + 1.5);

      // Subtle LFO for gentle vibrato
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.2 + idx * 0.1, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(2.5, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      this.oscillators.push(osc);
    });

    // Create gentle warm pink-noise / ocean breath
    try {
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.03;
        b6 = white * 0.115926;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'lowpass';
      noiseFilter.frequency.setValueAtTime(450, this.ctx.currentTime);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

      whiteNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      whiteNoise.start();
      this.noiseNode = whiteNoise;
    } catch {
      // Audio buffer creation fallback
    }

    let elapsed = 0;
    if (this.intervalId) window.clearInterval(this.intervalId);
    this.intervalId = window.setInterval(() => {
      if (this.isPlaying && onUpdate) {
        elapsed += 1;
        onUpdate(elapsed);
      }
    }, 1000);
  }

  public stop() {
    this.isPlaying = false;
    this.currentTrackId = null;
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.oscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // safe ignore
      }
    });
    this.oscillators = [];
    if (this.noiseNode) {
      try {
        this.noiseNode.stop();
        this.noiseNode.disconnect();
      } catch {
        // safe ignore
      }
      this.noiseNode = null;
    }
  }

  public setVolume(vol: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(Math.max(0, Math.min(1, vol)), this.ctx.currentTime);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getCurrentTrack(): string | null {
    return this.currentTrackId;
  }

  /**
   * Generates a downloadable WAV audio file of the calming session tone
   * so the user can download the audio file directly into their offline bundle
   */
  public generateAudioDownloadBlob(title: string): Blob {
    const sampleRate = 22050;
    const duration = 12; // 12 seconds loopable peaceful sound sample
    const numSamples = sampleRate * duration;
    const buffer = new ArrayBuffer(44 + numSamples * 2);
    const view = new DataView(buffer);

    // Write WAV header
    const writeString = (offset: number, str: string) => {
      for (let i = 0; i < str.length; i++) {
        view.setUint8(offset + i, str.charCodeAt(i));
      }
    };

    writeString(0, 'RIFF');
    view.setUint32(4, 36 + numSamples * 2, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); // PCM
    view.setUint16(22, 1, true); // Mono
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(36, 'data');
    view.setUint32(40, numSamples * 2, true);

    // Generate peaceful harmonic sine tones
    let offset = 44;
    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      // Gentle 432Hz chord with smooth envelope
      const env = Math.sin((t / duration) * Math.PI);
      const sample = (
        Math.sin(2 * Math.PI * 432 * t) * 0.4 +
        Math.sin(2 * Math.PI * 528 * t) * 0.3 +
        Math.sin(2 * Math.PI * 216 * t) * 0.2
      ) * env;

      const intSample = Math.max(-1, Math.min(1, sample)) * 0x7FFF;
      view.setInt16(offset, intSample, true);
      offset += 2;
    }

    return new Blob([buffer], { type: 'audio/wav' });
  }
}

export const audioEngine = new AudioEngine();
