"use client";

import { useState } from "react";

interface ProductImageGalleryProps {
  image: string;
  title: string;
}

export default function ProductImageGallery({
  image,
  title,
}: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] =
    useState(image);

  // Fake Store API provides one image,
  // so we use the same image for gallery thumbnails.
  const images = [
    image,
    image,
    image,
  ];

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="flex min-h-[450px] items-center justify-center rounded-2xl bg-white p-8">
        <img
          src={selectedImage}
          alt={title}
          className="max-h-[400px] max-w-full object-contain transition duration-500 hover:scale-105"
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-5 flex justify-center gap-4">
        {images.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(item)}
            className={`flex h-20 w-20 items-center justify-center rounded-xl border-2 bg-white p-2 transition ${
              selectedImage === item
                ? "border-blue-600"
                : "border-gray-200 hover:border-blue-400"
            }`}
          >
            <img
              src={item}
              alt={`${title} thumbnail ${index + 1}`}
              className="h-full w-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}