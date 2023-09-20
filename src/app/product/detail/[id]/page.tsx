import Image from "next/image";
import { ProductDetail, CardSeller } from "./components";

const page = () => {
  return (
    <div className="main_container">
      <ProductDetail />
      <CardSeller />
      
    </div>
  );
};

export default page;
