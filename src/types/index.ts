export type ServiceCategory =
  | 'wedding_photography'
  | 'pre_wedding'
  | 'event_coverage'
  | 'video_editing'
  | 'photo_editing'
  | 'advertisement'
  | 'social_media';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tools?: string[];
  image: string;
  imageAlt: string;
  badge?: string;
}

export type PortfolioCategory =
  | 'all'
  | 'wedding_photo'
  | 'wedding_cinema'
  | 'pre_wedding'
  | 'event_photo'
  | 'candid_photo'
  | 'portrait'
  | 'commercial'
  | 'product'
  | 'video_editing'
  | 'social_reels';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  mediaType: 'image' | 'video';
  videoDuration?: string;
  exif?: {
    camera: string;
    lens: string;
    settings: string;
  };
  clientType: 'Showcase' | 'Commission';
}

export interface ShowreelCategory {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  location: string;
  coverImage: string;
  videoHighlights: string[];
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  eventDate?: string;
  eventLocation?: string;
  projectDetails: string;
}
