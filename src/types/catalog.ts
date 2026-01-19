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
  quantity: number;
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

type Price = {
  price: number;
  discountedPrice?: number;
};

export type CartItem = {
  _id?: string;
  name: string;
  image?: string;
  price?: number;
  quantity: number;
};

export type CheckoutCartItem = {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};
