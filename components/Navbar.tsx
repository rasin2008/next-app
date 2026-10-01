"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          ShopEase
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">

          <Link
            href="/"
            className="font-medium text-gray-700 transition hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="font-medium text-gray-700 transition hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
          >
            Products
          </Link>

          <Link
            href="/about"
            className="font-medium text-gray-700 transition hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="font-medium text-gray-700 transition hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
          >
            Contact Us
          </Link>

          <Link
            href="/wishlist"
            className="font-medium text-gray-700 transition hover:text-red-500 dark:text-gray-200 dark:hover:text-red-400"
          >
            ❤️ Wishlist
          </Link>

          {/* Theme Button */}
          <ThemeToggle />

          {/* Cart */}
          <Link
            href="/cart"
            className="relative rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            🛒 Cart

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-800 dark:text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 pb-6 pt-5 dark:border-gray-800 dark:bg-gray-950 md:hidden">

          <div className="flex flex-col gap-5">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700 dark:text-gray-200"
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700 dark:text-gray-200"
            >
              Products
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700 dark:text-gray-200"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700 dark:text-gray-200"
            >
              Contact Us
            </Link>

            <Link
              href="/wishlist"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700 dark:text-gray-200"
            >
              ❤️ Wishlist
            </Link>

            <Link
              href="/cart"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-gray-700 dark:text-gray-200"
            >
              🛒 Cart ({cartCount})
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}