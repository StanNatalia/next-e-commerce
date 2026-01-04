import Image from "next/image";
import Link from "next/link";
import { categories } from "@/catalog/catalogs";
import { Product } from "@/types/catalog";

const PRODUCT_PER_PAGE = 20;

type ProductsListProps = {
  categorySlug?: string;
  limit?: number;
};

const ProductList = ({ limit, categorySlug }: ProductsListProps) => {
  const category = categories.find((cat) => cat.slug === categorySlug);

  const products = category
    ? category.products
    : categories.flatMap((cat) => cat.products);

  const visibleProducts = products.slice(0, limit || PRODUCT_PER_PAGE);

  return (
    <div className="flex gap-x-8 gap-y-16 justify-start flex-wrap mt-12">
      {visibleProducts.map((product: Product) => {
        const imageUrl = product.media?.mainMedia?.image?.url || "/product.png";

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
  );
};

export default ProductList;
