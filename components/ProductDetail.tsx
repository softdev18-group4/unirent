"use client";

import { ProductSelect, SlideProduct } from ".";




const ProductDetail = () => {
  return (
    <div className="product_details">
      <SlideProduct />
      <div className="product_select">
        <ProductSelect />
      </div>
    </div>
  );
};

export default ProductDetail;
