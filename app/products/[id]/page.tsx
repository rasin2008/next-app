import Link from "next/link";
import AddToCartButton from "../../../components/AddToCartButton";
import WishlistButton from "../../../components/WishlistButton";
import ProductImageGallery from "../../../components/ProductImageGallery";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function getProduct(id: string): Promise<Product> {
  const response = await fetch(
    `https://fakestoreapi.com/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Product not found");
  }

  const product: Product = await response.json();

  return product;
}

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Back Button */}
        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← Back to Products
        </Link>

        {/* Product Container */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-gray-800">

          <div className="grid md:grid-cols-2">

            {/* Product Image */}
            <div className="bg-white p-6 dark:bg-gray-800 sm:p-10">
              <ProductImageGallery
                image={product.image}
                title={product.title}
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center p-8 sm:p-12">

              {/* Category */}
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                {product.category}
              </p>

              {/* Title */}
              <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="mb-6 flex flex-wrap items-center gap-3">

                <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-3 py-2 dark:bg-yellow-950/40">

                  <span className="text-yellow-500">
                    ⭐
                  </span>

                  <span className="font-bold text-gray-900 dark:text-white">
                    {product.rating.rate}
                  </span>

                </div>

                <span className="text-gray-500 dark:text-gray-400">
                  ({product.rating.count} reviews)
                </span>

              </div>

              {/* Price */}
              <div className="mb-6">

                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  ${product.price.toFixed(2)}
                </span>

              </div>

              {/* Description */}
              <div className="mb-8">

                <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                  Product Description
                </h2>

                <p className="text-base leading-8 text-gray-600 dark:text-gray-300">
                  {product.description}
                </p>

              </div>

              {/* Divider */}
              <div className="mb-8 border-t border-gray-200 dark:border-gray-700" />

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">

                <div className="flex-1">
                  <AddToCartButton
                    product={{
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                    }}
                  />
                </div>

                <WishlistButton
                  product={{
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                  }}
                />

              </div>

              {/* Features */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">

                {/* Delivery */}
                <div className="rounded-xl bg-gray-50 p-4 text-center dark:bg-gray-700">

                  <div className="mb-1 text-xl">
                    🚚
                  </div>

                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                    Fast Delivery
                  </p>

                </div>

                {/* Payment */}
                <div className="rounded-xl bg-gray-50 p-4 text-center dark:bg-gray-700">

                  <div className="mb-1 text-xl">
                    🔒
                  </div>

                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                    Secure Payment
                  </p>

                </div>

                {/* Returns */}
                <div className="rounded-xl bg-gray-50 p-4 text-center dark:bg-gray-700">

                  <div className="mb-1 text-xl">
                    ↩️
                  </div>

                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                    Easy Returns
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </main>
  );
}