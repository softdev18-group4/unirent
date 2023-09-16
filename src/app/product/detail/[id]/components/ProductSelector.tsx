import { ProductSelectorProps } from "@/types"

const ProductSelector = ({title , price} : ProductSelectorProps) => {
  return (
    <div className="product_selector">
        <div className="product_selector_option">
          <div className="product_selector_option_left">
            <div className="dot" />
            <p>{title}</p>
          </div>
          <div className="product_selector_option_right">
            <h1>{price}</h1>
            <p>บาท</p>
          </div>
        </div>
      </div>
  )
}

export default ProductSelector