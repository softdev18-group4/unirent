import type { Metadata } from "next";
import Explore from "./components/explore";
import FindYourParter from "./components/findYourPartner";
import ProductList from "./components/productList";

export const metadata: Metadata = {
  title: "Recommend",
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
