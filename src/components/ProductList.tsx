"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/catalog/catalogs";
import { Product } from "@/types/catalog";
import { useSearchParams } from "next/navigation";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

type ProductListProps = {
  limit?: number;
};

const ITEMS_PER_PAGE = 8;

const ProductList = ({ limit }: ProductListProps) => {
  const searchParams = useSearchParams();

  const categorySlug = searchParams.get("category") || "all";
  const minPrice = Number(searchParams.get("min") || 0);
  const maxPrice = Number(searchParams.get("max") || Infinity);
  const sort = searchParams.get("sort") || "";
  const page = Number(searchParams.get("page") || 1);

  const category = categories.find((cat) => cat.slug === categorySlug);
  let products: Product[] = category
    ? category.products
    : categories.flatMap((cat) => cat.products);

  products = products.filter(
    (p) => p.price.price >= minPrice && p.price.price <= maxPrice
  );

  products.sort((a, b) => {
    switch (sort) {
      case "asc_price":
        return a.price.price - b.price.price;
      case "desc_price":
        return b.price.price - a.price.price;

      default:
        return 0;
    }
  });

  if (limit) {
    products = products.slice(0, limit);
  }

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginatedProducts = limit ? products : products.slice(start, end);

  return (
    <div className="flex flex-col gap-14">
      <div className="flex gap-x-8 gap-y-16 justify-center flex-wrap mt-12">
        {paginatedProducts.map((product: Product) => {
          const imageUrl =
            product.media?.mainMedia?.image?.url || "/product.png";
          const hoverImageUrl = product.media?.items?.[0]?.image?.url || null;

          return (
            <Link
              key={product._id}
              href={"/" + product.slug}
              className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            >
              <div className="relative w-full h-80 group">
                <Image
                  src={imageUrl}
                  alt={product.name}
                  fill
                  sizes="25vw"
                  className="absolute object-cover rounded-md z-10 transition-opacity duration-500 group-hover:opacity-0"
                />
                {hoverImageUrl && (
                  <Image
                    src={hoverImageUrl}
                    alt={product.name}
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md"
                  />
                )}
              </div>

              <div className="flex justify-between">
                <span className="font-medium">{product.name}</span>
                <span className="font-semibold">${product.price.price}</span>
              </div>

              <button className="rounded-2xl ring-1 w-max ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">
                Add to Cart
              </button>
            </Link>
          );
        })}
      </div>
      {!limit && totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} />
      )}
    </div>
  );
};

export default ProductList;
