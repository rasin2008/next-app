"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface WishlistContextType {
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (id: number) => boolean;
  removeFromWishlist: (id: number) => void;
}

const WishlistContext = createContext<
  WishlistContextType | undefined
>(undefined);

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const savedWishlist =
        window.localStorage.getItem("wishlist");

      if (
        !savedWishlist ||
        savedWishlist.trim() === ""
      ) {
        setWishlist([]);
      } else {
        const parsed = JSON.parse(savedWishlist);

        if (Array.isArray(parsed)) {
          setWishlist(parsed);
        } else {
          setWishlist([]);
        }
      }
    } catch (error) {
      console.error(
        "Wishlist loading failed:",
        error
      );

      window.localStorage.removeItem("wishlist");
      setWishlist([]);
    } finally {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isReady) return;

    try {
      window.localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
      );
    } catch (error) {
      console.error(
        "Wishlist saving failed:",
        error
      );
    }
  }, [wishlist, isReady]);

  const toggleWishlist = (product: Product) => {
    setWishlist((currentWishlist) => {
      const exists = currentWishlist.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return currentWishlist.filter(
          (item) => item.id !== product.id
        );
      }

      return [...currentWishlist, product];
    });
  };

  const isInWishlist = (id: number) => {
    return wishlist.some(
      (item) => item.id === id
    );
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((currentWishlist) =>
      currentWishlist.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}