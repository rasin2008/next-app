"use client";

import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function AddToCartButton({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert("Product added to cart! 🛒");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700"
    >
      🛒 Add to Cart
    </button>
  );
}