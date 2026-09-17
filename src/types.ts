export interface AudioTrack {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  durationSeconds: number;
  category: string;
  description: string;
  speaker: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  iconName: string;
  badge?: string;
  highlight?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  recoveryDuration: string;
  substance: string;
  quote: string;
  audioDuration?: string;
  date: string;
  imageAttachment?: string;
  imageCaption?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'method' | 'cost' | 'privacy' | 'family';
}

export interface PillarItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  points: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'book' | 'testimonial' | 'certificate' | 'session';
  badge: string;
  imageUrl: string;
  fullImageUrl: string;
  description: string;
  date?: string;
  author?: string;
}
