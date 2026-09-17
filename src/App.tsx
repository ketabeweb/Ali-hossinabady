import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LittleStrugglingCaller } from './components/LittleStrugglingCaller';
import { AddictionRecoveryHook } from './components/AddictionRecoveryHook';
import { FreeServicesBanner } from './components/FreeServicesBanner';
import { VideoShowcaseSection } from './components/VideoShowcaseSection';
import { MethodologySection } from './components/MethodologySection';
import { AudioPlayerSection } from './components/AudioPlayerSection';
import { ServicesSection } from './components/ServicesSection';
import { ComparisonSection } from './components/ComparisonSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { HandwrittenNotesSection } from './components/HandwrittenNotesSection';
import { CourseBookSection } from './components/CourseBookSection';
import { ConsultationForm } from './components/ConsultationForm';
import { EitaaCommunityBox } from './components/EitaaCommunityBox';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PhoneCallWidget } from './components/PhoneCallWidget';
import { CONTACT_INFO } from './data/therapyData';
import { audioEngine } from './utils/audioSynth';

export default function App() {
  const [selectedServiceForConsultation, setSelectedServiceForConsultation] = useState('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForConsultation(serviceTitle);
    scrollToSection('consultation');
  };

  const handlePlayAudioIntro = () => {
    audioEngine.playTrack('track-1');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-['Vazirmatn',sans-serif]">
      {/* Header */}
      <Header
        onScrollToSection={scrollToSection}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Hero */}
        <Hero
          onScrollToConsultation={() => scrollToSection('consultation')}
          onScrollToAudio={() => scrollToSection('audio')}
          onPlayAudioIntro={handlePlayAudioIntro}
          onScrollToHook={() => scrollToSection('recovery-hook')}
          onScrollToVideo={() => scrollToSection('video-section')}
        />

        {/* The Struggling Traveler Calling Mascot Showcase (Embedded) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <LittleStrugglingCaller
            variant="embedded"
            onScrollToConsultation={() => scrollToSection('consultation')}
          />
        </div>

        {/* Professional Hook & Empathy Assessment for Addicts */}
        <AddictionRecoveryHook
          onScrollToConsultation={() => scrollToSection('consultation')}
        />

        {/* 80% Free Services Financial Transparency Banner */}
        <FreeServicesBanner
          onScrollToConsultation={() => scrollToSection('consultation')}
        />

        {/* Video Documentary Showcase */}
        <VideoShowcaseSection
          onScrollToConsultation={() => scrollToSection('consultation')}
        />

        {/* Methodology 4 Pillars */}
        <MethodologySection
          onScrollToConsultation={() => scrollToSection('consultation')}
        />

        {/* Audio Player & Podcast Radio Mosafer */}
        <AudioPlayerSection />

        {/* Clinical Services */}
        <ServicesSection
          onSelectService={handleSelectService}
        />

        {/* Comparison Matrix: MMO vs Traditional Rehab */}
        <ComparisonSection />

        {/* Real Testimonials & Audio Voices */}
        <TestimonialsSection
          onScrollToGallery={() => scrollToSection('handwritten-notes')}
        />

        {/* Real Handwritten Letters & Documents with Clickable Lightbox */}
        <HandwrittenNotesSection />

        {/* Course & 40 Steps Book */}
        <CourseBookSection
          onScrollToConsultation={() => scrollToSection('consultation')}
        />

        {/* Confidential Consultation Form */}
        <ConsultationForm
          initialService={selectedServiceForConsultation}
        />

        {/* 24/7 Eitaa Online Travelers & Seekers Community Box */}
        <EitaaCommunityBox />

        {/* FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* Unified Interactive Phone Call & WhatsApp Widget */}
      <PhoneCallWidget />
    </div>
  );
}
