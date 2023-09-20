import Image from "next/image";
import { ProductRent, CardSeller , ProductDetail ,ProductCharacteristics} from "./components";

const page = () => {
  return (
    <div className="main_container">
      <ProductRent />
      <CardSeller />
      <ProductDetail />
      <ProductCharacteristics />
    </div>
  );
};

export default page;
