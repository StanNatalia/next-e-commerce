import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) => {
  const wixClient = await wixClientServer();

  // const res = await wixClient.products
  //   .queryProducts()
  //   .eq("collectionIds", categoryId)
  //   .limit(limit || PRODUCT_PER_PAGE)
  //   .find();

  // const res = await wixClient.products
  //   .queryProducts()
  //   .hasSome("collectionIds", [categoryId])
  //   .limit(limit || PRODUCT_PER_PAGE)
  //   .find();

  const query = wixClient.products.queryProducts();

  if (categoryId) {
    query.hasSome("collectionIds", [categoryId]);
  }

  const res = await query.limit(limit || PRODUCT_PER_PAGE).find();

  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap mt-12">
      {res.items.map((product: products.Product) => (
        <Link
          key={product._id}
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
              src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">My description</p>
          </div>
          <button className="rounded-2xl ring-1 w-max ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
