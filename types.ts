export interface Product {
  id: string;
  name: string;
  price?: number;
  description: string;
  images: string[];
  features?: string[];
  status?: 'In Stock' | 'In Progress' | 'Coming Soon' | 'Out of Stock';
  specs: {
    material: string;
    weight: string;
    certification?: string;
    impactRating?: string;
    color?: string;
    sport?: string;
    dimensions?: string;
  };
}

export interface ShippingRegion {
  id: string;
  region: string;
  time: string;
  cost?: string;
  status: 'On Time' | 'Delay' | 'Fast';
}

export interface NavLink {
  label: string;
  href: string;
}