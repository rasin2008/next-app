import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-blue-400"
            >
              ShopEase
            </Link>

            <p className="mt-4 max-w-xs leading-7 text-gray-400">
              Your trusted destination for quality
              products, great prices, and a simple
              shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-5 text-lg font-bold">
              Quick Links
            </h2>

            <div className="flex flex-col gap-3">

              <Link
                href="/"
                className="text-gray-400 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/products"
                className="text-gray-400 transition hover:text-white"
              >
                Products
              </Link>

              <Link
                href="/about"
                className="text-gray-400 transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="text-gray-400 transition hover:text-white"
              >
                Contact Us
              </Link>

            </div>
          </div>

          {/* Customer */}
          <div>
            <h2 className="mb-5 text-lg font-bold">
              Customer
            </h2>

            <div className="flex flex-col gap-3">

              <Link
                href="/cart"
                className="text-gray-400 transition hover:text-white"
              >
                Shopping Cart
              </Link>

              <Link
                href="/wishlist"
                className="text-gray-400 transition hover:text-white"
              >
                Wishlist
              </Link>

              <Link
                href="/checkout"
                className="text-gray-400 transition hover:text-white"
              >
                Checkout
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-5 text-lg font-bold">
              Contact
            </h2>

            <div className="space-y-3 text-gray-400">

              <p>📧 support@shopease.com</p>

              <p>📞 +91 98765 43210</p>

              <p>📍 Kerala, India</p>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-7">

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} ShopEase.
              All rights reserved.
            </p>

            <p>
              Built with Next.js & Tailwind CSS
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}