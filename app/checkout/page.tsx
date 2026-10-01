"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useCart } from "../../context/CartContext";

export default function CheckoutPage() {
  const { cart, totalPrice } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOrderPlaced(true);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-16 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl bg-white p-12 text-center shadow-lg dark:bg-gray-800">
            <div className="mb-6 text-7xl">🛒</div>

            <h1 className="mb-3 text-3xl font-bold">
              Your Cart is Empty
            </h1>

            <p className="mb-8 text-gray-600 dark:text-gray-400">
              Add some products to your cart before checkout.
            </p>

            <Link
              href="/products"
              className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Browse Products →
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (orderPlaced) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-16 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
        <div className="w-full max-w-2xl rounded-3xl bg-white p-10 text-center shadow-xl dark:bg-gray-800 sm:p-16">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl dark:bg-green-900/40">
            ✅
          </div>

          <h1 className="mb-4 text-3xl font-extrabold sm:text-4xl">
            Order Placed Successfully!
          </h1>

          <p className="mx-auto max-w-lg leading-7 text-gray-600 dark:text-gray-400">
            Thank you for shopping with ShopEase.
            Your demo order has been successfully placed.
          </p>

          <div className="mt-8 rounded-2xl bg-gray-50 p-6 dark:bg-gray-900">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Order Total
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
              ${totalPrice.toFixed(2)}
            </p>
          </div>

          <Link
            href="/products"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Continue Shopping →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            ShopEase
          </p>

          <h1 className="text-4xl font-extrabold">
            Checkout
          </h1>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Complete your details to place your order.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Checkout Form */}
          <div className="rounded-3xl bg-white p-7 shadow-lg dark:bg-gray-800 sm:p-10 lg:col-span-2">

            <h2 className="mb-8 text-2xl font-bold">
              Shipping Information
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-900"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-900"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-900"
                />
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                  Address
                </label>

                <textarea
                  id="address"
                  name="address"
                  required
                  rows={4}
                  placeholder="Enter your full address"
                  className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-900"
                />
              </div>

              {/* City + State */}
              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                  >
                    City
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    placeholder="City"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                  >
                    State
                  </label>

                  <input
                    id="state"
                    name="state"
                    type="text"
                    required
                    placeholder="State"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-900"
                  />
                </div>

              </div>

              {/* Pincode */}
              <div>
                <label
                  htmlFor="pincode"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                  PIN Code
                </label>

                <input
                  id="pincode"
                  name="pincode"
                  type="text"
                  required
                  placeholder="679576"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-900"
                />
              </div>

              {/* Payment */}
              <div>

                <h2 className="mb-4 text-xl font-bold">
                  Payment Method
                </h2>

                <div className="space-y-3">

                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-300 p-4 transition hover:border-blue-500 dark:border-gray-600 dark:hover:border-blue-400">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      defaultChecked
                    />

                    <span className="font-semibold">
                      💵 Cash on Delivery
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-300 p-4 transition hover:border-blue-500 dark:border-gray-600 dark:hover:border-blue-400">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                    />

                    <span className="font-semibold">
                      💳 Credit / Debit Card
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-300 p-4 transition hover:border-blue-500 dark:border-gray-600 dark:hover:border-blue-400">
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                    />

                    <span className="font-semibold">
                      📱 UPI
                    </span>
                  </label>

                </div>

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
              >
                Place Order 🛍️
              </button>

            </form>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-3xl bg-white p-7 shadow-lg dark:bg-gray-800">

            <h2 className="mb-7 text-2xl font-bold">
              Order Summary
            </h2>

            <div className="space-y-5">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-gray-200 pb-5 dark:border-gray-700"
                >
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-2 dark:bg-gray-700">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">

                    <h3 className="line-clamp-2 text-sm font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Qty: {item.quantity}
                    </p>

                    <p className="mt-1 font-bold text-blue-600 dark:text-blue-400">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                  </div>
                </div>
              ))}

            </div>

            <div className="mt-7 space-y-4">

              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal</span>

                <span className="font-semibold text-gray-900 dark:text-white">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Shipping</span>

                <span className="font-semibold text-green-600">
                  FREE
                </span>
              </div>

              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Tax</span>

                <span className="font-semibold text-gray-900 dark:text-white">
                  $0.00
                </span>
              </div>

            </div>

            <div className="my-6 border-t border-gray-200 dark:border-gray-700" />

            <div className="flex items-center justify-between">

              <span className="text-xl font-bold">
                Total
              </span>

              <span className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                ${totalPrice.toFixed(2)}
              </span>

            </div>

            <div className="mt-7 rounded-xl bg-green-50 p-4 text-center dark:bg-green-950/40">

              <p className="font-semibold text-green-700 dark:text-green-400">
                🔒 Secure Checkout
              </p>

              <p className="mt-1 text-xs text-green-600 dark:text-green-500">
                Your information is protected.
              </p>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}