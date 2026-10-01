import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-20 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            About ShopEase
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Shopping Made
            <span className="text-blue-600 dark:text-blue-400">
              {" "}Simple
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            ShopEase is a modern e-commerce platform created
            to make online shopping simple, convenient, and
            enjoyable for everyone.
          </p>

        </div>
      </section>

      {/* Main About */}
      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* Visual */}
          <div className="flex justify-center">

            <div className="relative flex h-80 w-full max-w-md items-center justify-center overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-gray-800">

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100 dark:bg-blue-900/30" />

              <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-purple-100 dark:bg-purple-900/30" />

              <div className="relative text-center">

                <div className="mb-5 text-8xl">
                  🛍️
                </div>

                <h2 className="text-3xl font-bold">
                  ShopEase
                </h2>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Shop • Save • Enjoy
                </p>

              </div>

            </div>

          </div>

          {/* Content */}
          <div>

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Who We Are
            </p>

            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Your Everyday Shopping Partner
            </h2>

            <p className="mb-5 leading-8 text-gray-600 dark:text-gray-300">
              ShopEase brings a wide range of products together
              in one convenient online store. Our goal is to make
              discovering and purchasing products as easy as
              possible.
            </p>

            <p className="leading-8 text-gray-600 dark:text-gray-300">
              From browsing products to managing your wishlist
              and cart, ShopEase provides a smooth shopping
              experience with a clean and user-friendly design.
            </p>

            <Link
              href="/products"
              className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Explore Products →
            </Link>

          </div>

        </div>

      </section>

      {/* Mission */}
      <section className="bg-white px-6 py-20 dark:bg-gray-950">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Our Mission
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              What We Focus On
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Quality */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center transition hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl dark:bg-blue-900/40">
                ⭐
              </div>

              <h3 className="mb-3 text-xl font-bold">
                Quality
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-400">
                We aim to provide quality products and
                a reliable shopping experience.
              </p>

            </div>

            {/* Convenience */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center transition hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl dark:bg-green-900/40">
                ⚡
              </div>

              <h3 className="mb-3 text-xl font-bold">
                Convenience
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-400">
                Search, filter, wishlist, and manage your
                cart with a simple interface.
              </p>

            </div>

            {/* Customers */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center transition hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-3xl dark:bg-purple-900/40">
                ❤️
              </div>

              <h3 className="mb-3 text-xl font-bold">
                Customer First
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-400">
                Our design focuses on creating a smooth
                and enjoyable customer journey.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="bg-blue-600 px-6 py-16 text-white dark:bg-blue-800">

        <div className="mx-auto grid max-w-6xl gap-10 text-center sm:grid-cols-3">

          <div>
            <div className="text-4xl font-extrabold">
              100+
            </div>

            <p className="mt-2 text-blue-100">
              Products
            </p>
          </div>

          <div>
            <div className="text-4xl font-extrabold">
              10K+
            </div>

            <p className="mt-2 text-blue-100">
              Customers
            </p>
          </div>

          <div>
            <div className="text-4xl font-extrabold">
              24/7
            </div>

            <p className="mt-2 text-blue-100">
              Online Shopping
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 text-center shadow-xl dark:bg-gray-800 sm:p-16">

          <div className="mb-5 text-5xl">
            🛒
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Start Shopping Today
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
            Explore our products and discover a simple,
            modern online shopping experience.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Shop Now →
          </Link>

        </div>

      </section>

    </main>
  );
}