import { categories } from "@/catalog/catalogs";
import Filter from "@/components/Filter";

import ProductList from "@/components/ProductList";
import Image from "next/image";
import React, { Suspense } from "react";

interface ListPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const ListPage = async ({ searchParams }: ListPageProps) => {
  const params = await searchParams;
  const categorySlug = params?.cat as string | undefined;

  const category = categories.find((cat) => cat.slug === categorySlug);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative pb-20">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h2 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% on
            <br />
            Selected Products
          </h2>
          <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/woman.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain"
          />
        </div>
      </div>

      {/* FILTER */}
      <Filter />

      {/* PRODUCTS */}
      <h2 className="mt-12 text-xl font-semibold">
        {category ? category.name : "Products"} for You!
      </h2>
      <Suspense fallback={"loading..."}>
        <ProductList limit={20} categorySlug={categorySlug} />
      </Suspense>
    </div>
  );
};

export default ListPage;
