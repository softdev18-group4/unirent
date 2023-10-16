import type { Metadata } from "next";
import Explore from "./components/Explore";
import FindYourParter from "./components/FindYourPartner";
import ProductList from "./components/ProductList";

export const metadata: Metadata = {
  //title: "Recommend",
};

function Recommend() {
  return (
    <div className="px-[5%]">
      <Explore></Explore>
      <FindYourParter></FindYourParter>
      <ProductList></ProductList>
    </div>
  );
}
export default Recommend;
