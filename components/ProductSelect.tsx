import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { reset, updateProduct } from "@/redux/features/productSlice";

const ProductSelect = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productReducer.value);

  return (
    <div className="product_select">
      <h1>{product.name}</h1>
    </div>
  );
};

export default ProductSelect;
