"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import WishlistButton from "../../components/WishlistButton";
import { useCart } from "../../context/CartContext";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  const { addToCart } = useCart();

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://fakestoreapi.com/products",
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to load products");
        }

        const text = await response.text();

        if (!text || text.trim() === "") {
          throw new Error("Empty API response");
        }

        let data: Product[];

        try {
          data = JSON.parse(text);
        } catch {
          throw new Error("Invalid product data received");
        }

        if (!Array.isArray(data)) {
          throw new Error("Invalid product data");
        }

        setProducts(data);
      } catch (error) {
        console.error("Products error:", error);

        setError(
          "Unable to load products. Please try again."
        );
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const categories = useMemo(() => {
    return [
      "all",
      ...Array.from(
        new Set(
          products.map((product) => product.category)
        )
      ),
    ];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim()) {
      result = result.filter((product) =>
        product.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Category
    if (category !== "all") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    // Sorting
    if (sort === "low") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "high") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sort === "name") {
      result.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return result;
  }, [products, search, category, sort]);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });

    alert("Product added to cart! 🛒");
  };

  /* Loading */
  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-16 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <div className="mx-auto h-10 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />

            <div className="mx-auto mt-4 h-5 w-80 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {Array.from({ length: 8 }).map(
              (_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl bg-white shadow-md dark:bg-gray-800"
                >
                  <div className="h-64 animate-pulse bg-gray-200 dark:bg-gray-700" />

                  <div className="space-y-4 p-5">
                    <div className="h-4 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />

                    <div className="h-6 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />

                    <div className="h-8 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />

                    <div className="h-12 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                  </div>
                </div>
              )
            )}

          </div>
        </div>
      </main>
    );
  }

  /* Error */
  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 dark:bg-gray-900">

        <div className="rounded-2xl bg-white p-10 text-center shadow-lg dark:bg-gray-800">

          <div className="mb-4 text-5xl">
            ⚠️
          </div>

          <h1 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
            Something went wrong
          </h1>

          <p className="mb-6 text-gray-600 dark:text-gray-400">
            {error}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Try Again
          </button>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            ShopEase Collection
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Our Products
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Discover amazing products at great prices.
            Find everything you need in one place.
          </p>

        </div>

        {/* Filters */}
        <div className="mb-10 rounded-2xl bg-white p-5 shadow-md dark:bg-gray-800">

          <div className="grid gap-4 md:grid-cols-3">

            {/* Search */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200">
                Search Products
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search products..."
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200">
                Category
              </label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 capitalize text-gray-900 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
              >
                {categories.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item === "all"
                      ? "All Categories"
                      : item}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200">
                Sort By
              </label>

              <select
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value)
                }
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
              >
                <option value="default">
                  Default
                </option>

                <option value="low">
                  Price: Low to High
                </option>

                <option value="high">
                  Price: High to Low
                </option>

                <option value="name">
                  Name: A to Z
                </option>
              </select>
            </div>

          </div>

          {/* Product Count */}
          <div className="mt-5 border-t border-gray-200 pt-5 dark:border-gray-700">

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing{" "}
              <span className="font-bold text-gray-900 dark:text-white">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>

          </div>

        </div>

        {/* No Products */}
        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow-md dark:bg-gray-800">

            <div className="mb-5 text-6xl">
              🔍
            </div>

            <h2 className="mb-3 text-2xl font-bold">
              No Products Found
            </h2>

            <p className="text-gray-600 dark:text-gray-400">
              Try changing your search or filter.
            </p>

          </div>
        ) : (

          /* Product Grid */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (

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

                  {/* Wishlist */}
                  <div className="absolute right-4 top-4">
                    <WishlistButton
                      product={{
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                      }}
                    />
                  </div>

                </div>

                {/* Product Info */}
                <div className="p-5">

                  <p className="mb-2 text-sm font-semibold capitalize text-blue-600 dark:text-blue-400">
                    {product.category}
                  </p>

                  <h2 className="mb-3 line-clamp-2 min-h-[56px] text-lg font-bold text-gray-900 dark:text-white">
                    {product.title}
                  </h2>

                  <p className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
                    ${product.price.toFixed(2)}
                  </p>

                  <div className="flex gap-2">

                    {/* View Details */}
                    <Link
                      href={`/products/${product.id}`}
                      className="flex-1 rounded-lg border border-blue-600 px-3 py-3 text-center text-sm font-semibold text-blue-600 transition hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
                    >
                      View Details
                    </Link>

                    {/* Add */}
                    <button
                      onClick={() =>
                        handleAddToCart(product)
                      }
                      className="flex-1 rounded-lg bg-blue-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      🛒 Add
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </main>
  );
}