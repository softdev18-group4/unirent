import { ProductSelectorProps } from "@/types"
import { useState } from "react";

const ProductSelector = ({title , price , handleClick , select } : ProductSelectorProps) => {

  const handleSelectorClick = () => {
    if (handleClick) {
      handleClick();
    }
  };
  return (
    <div
      className={`product_selector ${select ? 'selected' : ''}`}
      onClick={handleSelectorClick}
    >
    <div className="product_selector">
        <div className="product_selector_option" style={{ borderColor: select ? '#FF6E31' : '' }} >
          <div className="product_selector_option_left">
            <div className="dot" style={{ background: select ? '#FF6E31' : '' }}/>
            <p>{title}</p>
          </div>
          <div className="product_selector_option_right">
            <h1>{price}</h1>
            <p>บาท</p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default ProductSelector