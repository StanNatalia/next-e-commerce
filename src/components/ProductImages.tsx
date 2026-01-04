"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          sizes="50vw"
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div
        className="flex justify-between gap-4 mt-8
      "
      >
        {items.map((item: any, i: number) => (
          <div
            key={i}
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              sizes="30vw"
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
