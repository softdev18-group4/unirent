"use client";

import { ProductSelect, SlideProduct } from ".";

const ProductDetail = () => {
  return (
    <div className="product_details">
      <div className="product_slide">
        <SlideProduct />
      </div>

      <ProductSelect />
    </div>
  );
};

export default ProductDetail;
