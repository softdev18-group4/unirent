import Image from "next/image";
import { ProductRent, CardSeller } from "./components";

const page = () => {
  return (
    <div className="main_container">
      <ProductRent />
      <CardSeller />
    </div>
  );
};

export default page;
