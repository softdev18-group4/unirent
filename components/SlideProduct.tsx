"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { imageList } from "../constants";

const SlideProduct = () => {
  const [product, setProduct] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getProduct = async () => {
    setProduct(imageList);
  };
  const goToPrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === product.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="product_image">
        <Image
          src={product[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="image_fix"
        />

      <div className="product_image_under">
        {product.map((image, index) => (
          <div
            key={index}
            className={`thumbnail_image ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              layout="fill"
          objectFit="cover"
          className="image_fix"
              onClick={() => setCurrentIndex(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideProduct;
