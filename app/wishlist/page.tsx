"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function WishlistPage() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    alert("Product added to cart! 🛒");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-500">
            ShopEase
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            My Wishlist ❤️
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Save your favorite products and shop them whenever you want.
          </p>

        </div>

        {/* Empty Wishlist */}
        {wishlist.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-lg dark:bg-gray-800">

            <div className="mb-6 text-7xl">
              🤍
            </div>

            <h2 className="mb-3 text-2xl font-bold">
              Your Wishlist is Empty
            </h2>

            <p className="mb-8 text-gray-600 dark:text-gray-400">
              You haven't added any products to your wishlist yet.
            </p>

            <Link
              href="/products"
              className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Products →
            </Link>

          </div>
        ) : (
          <>
            {/* Wishlist Header */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-bold text-gray-900 dark:text-white">
                  {wishlist.length}
                </span>{" "}
                {wishlist.length === 1
                  ? "product"
                  : "products"}{" "}
                saved
              </p>

              <Link
                href="/products"
                className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                Continue Shopping →
              </Link>

            </div>

            {/* Products */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {wishlist.map((product) => (

                <div
                  key={product.id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
                >

                  {/* Image */}
                  <div className="relative flex h-64 items-center justify-center bg-white p-6 dark:bg-gray-800">

                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
                    />

                    {/* Remove Heart */}
                    <button
                      type="button"
                      onClick={() =>
                        removeFromWishlist(product.id)
                      }
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-xl text-red-500 transition hover:bg-red-100 dark:bg-red-950/50 dark:hover:bg-red-950"
                      title="Remove from Wishlist"
                    >
                      ❤️
                    </button>

                  </div>

                  {/* Product Info */}
                  <div className="p-5">

                    <h2 className="mb-4 line-clamp-2 min-h-[56px] text-lg font-bold text-gray-900 dark:text-white">
                      {product.title}
                    </h2>

                    <p className="mb-5 text-2xl font-bold text-blue-600 dark:text-blue-400">
                      ${product.price.toFixed(2)}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-2">

                      <Link
                        href={`/products/${product.id}`}
                        className="flex-1 rounded-lg border border-blue-600 px-3 py-3 text-center text-sm font-semibold text-blue-600 transition hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
                      >
                        View
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          handleAddToCart(product)
                        }
                        className="flex-1 rounded-lg bg-blue-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                      >
                        🛒 Add
                      </button>

                    </div>

                    {/* Remove Button */}
                    <button
                      type="button"
                      onClick={() =>
                        removeFromWishlist(product.id)
                      }
                      className="mt-3 w-full rounded-lg py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950/40"
                    >
                      🗑 Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>
          </>
        )}

      </div>
    </main>
  );
}