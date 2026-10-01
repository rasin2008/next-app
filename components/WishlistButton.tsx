"use client";

import { useWishlist } from "../context/WishlistContext";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function WishlistButton({
  product,
}: {
  product: Product;
}) {
  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const liked = isInWishlist(product.id);

  return (
    <button
      onClick={() => toggleWishlist(product)}
      className={`rounded-lg border px-4 py-3 text-xl transition ${
        liked
          ? "border-red-500 bg-red-50 text-red-500"
          : "border-gray-300 bg-white text-gray-500 hover:border-red-400 hover:text-red-500"
      }`}
      title={
        liked
          ? "Remove from Wishlist"
          : "Add to Wishlist"
      }
    >
      {liked ? "❤️" : "🤍"}
    </button>
  );
}