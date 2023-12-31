import Link from "next/link";
import { Metadata } from "next";
import PaginationTable from "../components/PaginationTable";

export const metadata: Metadata = {
  // title: "Your Products",
};

function ProductsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-end">
        <div className="cursor-default font-bold uppercase text-2xl lg:text-3xl">
          your products
        </div>
        <Link
          className="theme-text-color2 font-extrabold"
          href="/my-shop/products/add"
        >
          + เพิ่มสินค้า
        </Link>
      </div>
      <PaginationTable></PaginationTable>
    </div>
  );
}
export default ProductsPage;
