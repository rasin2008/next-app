"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    event.currentTarget.reset();
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">

          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            ShopEase Support
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Have a question or need help? Send us a message
            and our team will be happy to help.
          </p>

        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mx-auto mb-8 max-w-4xl rounded-2xl border border-green-200 bg-green-50 p-5 text-center dark:border-green-800 dark:bg-green-950/40">

            <p className="font-semibold text-green-700 dark:text-green-400">
              ✅ Message sent successfully!
            </p>

            <p className="mt-1 text-sm text-green-600 dark:text-green-500">
              Thank you for contacting ShopEase.
            </p>

          </div>
        )}

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Contact Information */}
          <div className="space-y-5">

            {/* Email */}
            <div className="rounded-2xl bg-white p-7 shadow-md dark:bg-gray-800">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl dark:bg-blue-900/40">
                📧
              </div>

              <h2 className="mb-2 text-xl font-bold">
                Email
              </h2>

              <p className="text-gray-600 dark:text-gray-400">
                support@shopease.com
              </p>

            </div>

            {/* Phone */}
            <div className="rounded-2xl bg-white p-7 shadow-md dark:bg-gray-800">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl dark:bg-green-900/40">
                📞
              </div>

              <h2 className="mb-2 text-xl font-bold">
                Phone
              </h2>

              <p className="text-gray-600 dark:text-gray-400">
                +91 98765 43210
              </p>

            </div>

            {/* Location */}
            <div className="rounded-2xl bg-white p-7 shadow-md dark:bg-gray-800">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-2xl dark:bg-purple-900/40">
                📍
              </div>

              <h2 className="mb-2 text-xl font-bold">
                Location
              </h2>

              <p className="text-gray-600 dark:text-gray-400">
                Kerala, India
              </p>

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-7 shadow-lg dark:bg-gray-800 sm:p-10 lg:col-span-2">

            <div className="mb-8">

              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Send a Message
              </p>

              <h2 className="text-3xl font-bold">
                We'd Love to Hear From You
              </h2>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name */}
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
                  placeholder="Enter your name"
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
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-900"
                />

              </div>

              {/* Subject */}
              <div>

                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What is your message about?"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-900"
                />

              </div>

              {/* Message */}
              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:focus:ring-blue-900"
                />

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg sm:w-auto"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-3xl bg-blue-600 p-10 text-center text-white dark:bg-blue-800">

          <div className="mb-4 text-4xl">
            💬
          </div>

          <h2 className="text-2xl font-bold sm:text-3xl">
            Need Quick Help?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Our support team is here to help you with
            your shopping experience.
          </p>

        </div>

      </div>

    </main>
  );
}