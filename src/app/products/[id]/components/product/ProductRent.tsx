"use client";

import { ProductSelect, ProductSlide } from "..";

const ProductRent = () => {
  return (
    <div className="product_rent">
      <div className="product_slide">
        <ProductSlide />
      </div>
      <ProductSelect />
    </div>
  );
};

export default ProductRent;
