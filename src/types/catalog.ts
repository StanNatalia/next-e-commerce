export type Product = {
  _id: string;
  name: string;
  slug: string;
  price: {
    price: number;
    discountedPrice?: number;
  };
  currency: string;
  category: string;
  subCategory: string;
  description: string;
  bestseller: boolean;
  sizes: string[];
  media: {
    mainMedia?: {
      image?: {
        url?: string;
      };
    };
    items?: {
      image?: {
        url?: string;
      };
    }[];
  };
};

export type Category = {
  _id: string;
  name: string;
  slug: string;
  image?: {
    url?: string;
  };
  products: Product[];
};
