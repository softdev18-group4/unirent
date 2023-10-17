import type { Metadata } from "next";
import Explore from "../components/Explore";
import FindYourParter from "../components/FindYourPartner";
import ProductList from "../components/ProductList";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  //title: "Recommend",
};

function Recommend() {
  return (
    <>
      <Navbar />
      <div className="px-[5%]">
        <Explore />
        <FindYourParter />
        <ProductList />
      </div>
    </>
  );
}
export default Recommend;
