export interface Product {
  id: string;
  name: string;
  price?: number;
  description: string;
  images: string[];
  features?: string[];
  specs: {
    material: string;
    weight: string;
    certification: string;
    impactRating: string;
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