"use client";

import Link from "next/link";
import SearchBar from "../components/searchBar";
import { useState } from "react";
import TableHeader from "../components/tableHeader";
import ProductCard from "../components/productCard";
import PaginaionBtn from "../components/paginationBtn";

function ProductsPage() {
  const [inputValue, setInputValue] = useState<string>("");
  const [page, setPage] = useState(0);
  const childSetPage = (page: number) => {
    setPage(page);
  };
  return (
    <div className="p-4">
      <div className="flex justify-between items-end">
        <div className="font-bold uppercase text-3xl">your products</div>
        <Link className="theme-text-color2 font-extrabold" href="#">
          + เพิ่มสินค้า
        </Link>
      </div>
      <div className="my-4 w-full rounded-2xl bg-white h-24 flex justify-end items-center p-4">
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          placeholder="Search Products"
        ></SearchBar>
      </div>
      <div className="relative overflow-x-auto mt-4">
        <table className="w-full border-separate border-spacing-y-2 text-xs md:text-sm lg:text-base">
          <TableHeader></TableHeader>
          {[1, 2, 3, 4, 5].map((tmp, index) => (
            <tbody key={index}>
              <ProductCard
                imgSrc="/product.png"
                name="MacBook Air"
                status="ว่าง"
                period="รายวัน / รายเดือน"
                price="100/1500"
                date="24 Aug, 2023"
                timeleft="10 ปี"
              ></ProductCard>
            </tbody>
          ))}
        </table>
      </div>
      <div className="flex justify-end my-5">
        {page <= 3
          ? [1, 2, 3, 4, 5].map((num, index) => (
              <PaginaionBtn
                number={num}
                ishighlight={num == page}
                key={index}
                childSetPage={childSetPage}
              ></PaginaionBtn>
            ))
          : [page - 2, page - 1, page, page + 1, page + 2].map((num, index) => (
              <PaginaionBtn
                number={num}
                ishighlight={num == page}
                key={index}
                childSetPage={childSetPage}
              ></PaginaionBtn>
            ))}
        {}
      </div>
    </div>
  );
}
export default ProductsPage;
