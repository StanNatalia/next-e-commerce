"use client";
import React, { useState } from "react";
import AddToCart from "./AddToCart";
import { Product } from "@/types/catalog";

type Props = {
  product: Product;
};

const Add = ({ product }: Props) => {
  const [quantity, setQuantity] = useState(1);

  //TEMPORARI
  const stock = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              onClick={() => handleQuantity("d")}
              className="cursor-pointer text-xl"
            >
              -
            </button>
            {quantity}
            <button
              onClick={() => handleQuantity("i")}
              className="cursor-pointer text-xl"
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">4 items</span> left!
            <br /> {"Don't"}
            {""} miss it
          </div>
        </div>
        <AddToCart product={product} quantity={quantity} />
      </div>
    </div>
  );
};

export default Add;
