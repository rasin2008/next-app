"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  /* Empty Cart */
  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-16 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
        <div className="mx-auto max-w-4xl">

          <div className="rounded-3xl bg-white p-12 text-center shadow-lg dark:bg-gray-800">

            <div className="mb-6 text-7xl">
              🛒
            </div>

            <h1 className="mb-3 text-3xl font-bold">
              Your Cart is Empty
            </h1>

            <p className="mb-8 text-gray-600 dark:text-gray-400">
              You haven't added any products to your cart yet.
            </p>

            <Link
              href="/products"
              className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Start Shopping →
            </Link>

          </div>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10">

          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            ShopEase
          </p>

          <h1 className="text-4xl font-bold">
            Shopping Cart 🛒
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Review your items before checkout.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Cart Items */}
          <div className="space-y-5 lg:col-span-2">

            {cart.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white p-5 shadow-md transition hover:shadow-lg dark:bg-gray-800"
              >

                <div className="flex flex-col gap-5 sm:flex-row">

                  {/* Image */}
                  <div className="flex h-44 w-full items-center justify-center rounded-xl bg-gray-50 p-5 dark:bg-gray-700 sm:w-44">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />

                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col justify-between">

                    <div>

                      <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h2>

                      <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        ${item.price.toFixed(2)}
                      </p>

                    </div>

                    {/* Controls */}
                    <div className="mt-5 flex flex-wrap items-center gap-4">

                      {/* Quantity */}
                      <div className="flex items-center overflow-hidden rounded-xl border border-gray-300 dark:border-gray-600">

                        <button
                          type="button"
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="px-4 py-2 text-xl font-bold text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                        >
                          −
                        </button>

                        <span className="min-w-12 px-2 text-center font-bold text-gray-900 dark:text-white">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          className="px-4 py-2 text-xl font-bold text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                        >
                          +
                        </button>

                      </div>

                      {/* Item Total */}
                      <p className="font-bold text-gray-900 dark:text-white">
                        $
                        {(
                          item.price *
                          item.quantity
                        ).toFixed(2)}
                      </p>

                      {/* Remove */}
                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        className="rounded-lg px-4 py-2 font-semibold text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950"
                      >
                        🗑 Remove
                      </button>

                    </div>

                  </div>

                </div>

              </div>
            ))}

            {/* Continue Shopping */}
            <Link
              href="/products"
              className="inline-block pt-2 font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              ← Continue Shopping
            </Link>

          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl bg-white p-7 shadow-lg dark:bg-gray-800">

            <h2 className="mb-7 text-2xl font-bold">
              Order Summary
            </h2>

            {/* Subtotal */}
            <div className="mb-4 flex justify-between text-gray-600 dark:text-gray-400">

              <span>
                Subtotal
              </span>

              <span className="font-semibold text-gray-900 dark:text-white">
                ${totalPrice.toFixed(2)}
              </span>

            </div>

            {/* Shipping */}
            <div className="mb-4 flex justify-between text-gray-600 dark:text-gray-400">

              <span>
                Shipping
              </span>

              <span className="font-semibold text-green-600">
                FREE
              </span>

            </div>

            {/* Tax */}
            <div className="mb-5 flex justify-between text-gray-600 dark:text-gray-400">

              <span>
                Tax
              </span>

              <span className="font-semibold text-gray-900 dark:text-white">
                $0.00
              </span>

            </div>

            <div className="my-6 border-t border-gray-200 dark:border-gray-700" />

            {/* Total */}
            <div className="mb-7 flex items-center justify-between">

              <span className="text-xl font-bold">
                Total
              </span>

              <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                ${totalPrice.toFixed(2)}
              </span>

            </div>

            {/* Checkout */}
            <Link
              href="/checkout"
              className="block w-full rounded-xl bg-blue-600 px-6 py-4 text-center font-bold text-white transition hover:bg-blue-700"
            >
              Proceed to Checkout →
            </Link>

            {/* Secure Checkout */}
            <div className="mt-5 rounded-xl bg-green-50 p-4 text-center dark:bg-green-950/40">

              <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                🔒 Secure Checkout
              </p>

              <p className="mt-1 text-xs text-green-600 dark:text-green-500">
                Your information is safe with us.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}