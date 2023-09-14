import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { reset, updateProduct } from "@/redux/features/productSlice";
import CustomButton from "./CustomButton";
import Star from "./Star";

const ProductSelect = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productReducer.value);

  return (
    <div className="product_select">
      <div className="product_select_title">
        <h1>{product.name}</h1>
        <CustomButton title="เพิ่มไปยังตะกร้า" customBtn="btn_custom1" />
      </div>
      <div className="product_select_tag">
        <p>Macbook</p>
      </div>
      <div className="product_select_review">
        <Star rating={2.9} />  
        <p className="product_select_review_count">3 รีวิว</p>
      </div>
      <div className="hr"/>

      
    </div>
  );
};

export default ProductSelect;
