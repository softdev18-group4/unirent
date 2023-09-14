import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { reset, updateProduct } from "@/redux/features/productSlice";

const ProductSelect = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productReducer.value);

  return (
    <div className="product_select">
      <div className="product_select_title">
        <h1 className="mr-auto">{product.name}</h1>
        <button className="align-right">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductSelect;
