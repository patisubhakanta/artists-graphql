
// Type for Pricing Information
export interface Price {
    amount: number;
    currency: string;
  }
  
  // Type for Price Range
  export interface PriceRange {
    start: {
        gross:Price
    };
  }
  
  // Type for Thumbnail Image
  export interface Thumbnail {
    url: string;
    alt: string;
  }
  
  // Type for Product Node
  export interface ProductDTO {
    id: string;
    name: string;
    description: string;
    pricing: {
      priceRange: PriceRange;
    };
    thumbnail: Thumbnail;
  }
  