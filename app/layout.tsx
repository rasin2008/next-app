import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "../context/WishlistContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopEase | Modern E-Commerce Store",
  description:
    "ShopEase is a modern e-commerce store with quality products, wishlist, cart, and secure checkout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <WishlistProvider>
          <CartProvider>
            <Navbar />

            <main>{children}</main>

            <Footer />
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}