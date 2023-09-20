import Image from "next/image";
import { ProductRent, CardSeller , ProductDetail ,ProductCharacteristics ,ProductReview} from "./components";

const page = () => {
  return (
    <div className="main_container">
      <ProductRent />
      <CardSeller />
      <div className="product_layout">
        <div>
      <ProductDetail />
      <ProductCharacteristics />

        </div>
      <ProductReview />
      </div>
      
    </div>
  );
};

export default page;
