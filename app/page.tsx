import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">

          {/* Left */}
          <div>
            <p className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              ✨ Welcome to ShopEase
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Shop Smart.
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                Live Better.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              Discover quality products, amazing prices, and
              a simple shopping experience designed for you.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/products"
                className="rounded-xl bg-blue-600 px-7 py-4 text-center font-bold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-xl"
              >
                🛍️ Shop Now
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-gray-300 bg-white px-7 py-4 text-center font-bold text-gray-800 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                Learn More
              </Link>

            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center">

            <div className="absolute h-72 w-72 rounded-full bg-blue-300/30 blur-3xl dark:bg-blue-600/20" />

            <div className="relative flex h-80 w-80 items-center justify-center rounded-[3rem] bg-white shadow-2xl dark:bg-gray-800 sm:h-96 sm:w-96">

              <div className="text-center">

                <div className="mb-5 text-8xl">
                  🛍️
                </div>

                <h2 className="text-3xl font-bold">
                  ShopEase
                </h2>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Everything you need
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-6 py-20 dark:bg-gray-950">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Why ShopEase?
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Everything You Need
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
              We make online shopping simple, convenient,
              and enjoyable.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Feature 1 */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center transition hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl dark:bg-blue-900/40">
                🚚
              </div>

              <h3 className="mb-3 text-xl font-bold">
                Fast Delivery
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-400">
                Get your orders delivered quickly
                and safely to your doorstep.
              </p>

            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center transition hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl dark:bg-green-900/40">
                🔒
              </div>

              <h3 className="mb-3 text-xl font-bold">
                Secure Shopping
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-400">
                Your shopping experience is protected
                with secure and reliable checkout.
              </p>

            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center transition hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-3xl dark:bg-purple-900/40">
                ⭐
              </div>

              <h3 className="mb-3 text-xl font-bold">
                Quality Products
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-400">
                Explore carefully selected products
                at great prices.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="bg-blue-600 px-6 py-16 text-white dark:bg-blue-800">

        <div className="mx-auto grid max-w-6xl gap-10 text-center sm:grid-cols-3">

          <div>
            <p className="text-4xl font-extrabold">
              100+
            </p>
            <p className="mt-2 text-blue-100">
              Products
            </p>
          </div>

          <div>
            <p className="text-4xl font-extrabold">
              10K+
            </p>
            <p className="mt-2 text-blue-100">
              Happy Customers
            </p>
          </div>

          <div>
            <p className="text-4xl font-extrabold">
              4.8/5
            </p>
            <p className="mt-2 text-blue-100">
              Customer Rating
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gray-50 px-6 py-20 dark:bg-gray-900">

        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 text-center shadow-xl dark:bg-gray-800 sm:p-16">

          <div className="mb-5 text-5xl">
            🛒
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Start Shopping?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
            Browse our collection and find something
            you'll love.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Explore Products →
          </Link>

        </div>

      </section>

    </main>
  );
}