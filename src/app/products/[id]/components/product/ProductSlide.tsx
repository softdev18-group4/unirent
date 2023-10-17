"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

const ProductSlide = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productReducer.value);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.src.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === product.src.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="product_image">
      <img
        src={product.src[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="image_fix object-cover"
      />

      <div className="product_image_under">
        {product.src.map((image, index) => (
          <div
            key={index}
            className={`thumbnail_image ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="image_fix"
              onClick={() => setCurrentIndex(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlide;
