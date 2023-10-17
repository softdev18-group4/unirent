import { useAppSelector } from "@/redux/hooks";
import { CardDetail } from "..";
import { ProductState } from "@/types";

const ProductCharacteristics = () => {
  const product : ProductState=  useAppSelector(
    (state: { productReducer: { value: any } }) => state.productReducer.value
  );
  return (

   
    <div className="product_characteristics">
      <p className="title_p">ลักษณะสินค้า</p>
      {product && 
      <div>
      <CardDetail detail={`Brand : ${product.specifications.brand}`} />
      <CardDetail detail={`graphicCard : ${product.specifications.graphicCard}`} />
      <CardDetail detail={`model : ${product.specifications.model}`} />
      <CardDetail detail={`processor : ${product.specifications.processor}`} />
      <CardDetail detail={`ramSize :${product.specifications.ramSize}`} />
      <CardDetail detail={`storageSize :${product.specifications.storageSize}`} />
      </div>
}
      
      
    </div>
  );
};

export default ProductCharacteristics;
