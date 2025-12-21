"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/35105893/pexels-photo-35105893.jpeg",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/21370403/pexels-photo-21370403.jpeg",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/20428359/pexels-photo-20428359.jpeg",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/33870710/pexels-photo-33870710.jpeg",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
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
        {images.map((img, i) => (
          <div
            key={img.id}
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
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
