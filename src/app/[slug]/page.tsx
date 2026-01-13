import { categories } from "@/catalog/catalogs";
import Add from "@/components/Add";
import ProductImages from "@/components/ProductImages";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  const product = categories
    .flatMap((cat) => cat.products)
    .find((prod) => prod.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="pb-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/*IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/*TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h2 className="text-4xl font-medium">{product.name}</h2>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] bg-gray-100" />

        {product.price?.price === product.price?.discountedPrice ? (
          <h3 className="text-xl text-gray-500 line-through">
            ${product.price?.price}
          </h3>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.price?.price}
            </h3>
            <h4 className="font-medium text-2xl">
              ${product.price?.discountedPrice}
            </h4>
          </div>
        )}

        <div className="h-[2px] bg-gray-100" />

        <Add product={product} />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Return Policy</h4>
          <p>
            Return Policy We want you to be completely satisfied with your
            purchase. If for any reason you are not happy with your order, you
            may return most items within 30 days of receipt for a full refund or
            exchange.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Shipping Info</h4>
          <p>
            We also ship internationally. Delivery times may vary depending on
            your country, and customers are responsible for customs fees or
            import taxes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
