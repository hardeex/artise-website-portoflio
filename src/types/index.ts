export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface Artist {
  name: string;
  title: string;
  bio: string;
  image: string;
  socialLinks: SocialLinks;
}

export interface SocialLinks {
  instagram?: string;
  twitter?: string;
  facebook?: string;
  website?: string;
  email?: string;
}

export interface Artwork {
  id: string;
  title: string;
  description: string;
  image: string;
  category: ArtworkCategory;
  year: number;
  medium: string;
  dimensions?: string;
  price?: number;
  available: boolean;
}

export type ArtworkCategory = 
  | 'painting' 
  | 'digital' 
  | 'sculpture' 
  | 'photography' 
  | 'mixed-media';

export interface Exhibition {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  venue: string;
  location: string;
  image?: string;
  artworks: string[]; // artwork ids
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
}

// Component props
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}