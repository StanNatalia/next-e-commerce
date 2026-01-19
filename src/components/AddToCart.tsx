"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/types/catalog";
import toast from "react-hot-toast";

type Props = {
  product: Product;
  quantity: number;
};

const AddToCart = ({ product, quantity }: Props) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product._id,
      name: product.name,
      price: product.price?.discountedPrice ?? product.price?.price,
      quantity: quantity,
      image: product.media?.mainMedia?.image?.url || "/product.png",
    });

    toast.success(`${quantity} item(s) added to cart`);
  };
  return (
    <button
      onClick={handleAddToCart}
      className="w-max rounded-2xl ring-1 ring-lama text-lama py-3 px-6 hover:bg-lama hover:text-white transition"
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
