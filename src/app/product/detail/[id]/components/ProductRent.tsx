"use client";

import { ProductSelect, SlideProduct } from ".";

const ProductRent = () => {
  return (
    <div className="product_rent">
      <div className="product_slide">
        <SlideProduct />
      </div>
      <ProductSelect />
    </div>
  );
};

export default ProductRent;
