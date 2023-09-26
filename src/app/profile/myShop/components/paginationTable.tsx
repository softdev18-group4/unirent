"use client";

import TableHeader from "../components/tableHeader";
import ProductCard from "../components/productCard";
import PaginaionBtn from "../components/paginationBtn";
import SearchBar from "../components/searchBar";
import { useState } from "react";

function PaginationTable({ api }: { api: string }) {
  const [inputValue, setInputValue] = useState<string>("");
  const [page, setPage] = useState(0);
  const childSetPage = (page: number) => {
    setPage(page);
  };
  return (
    <div>
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
export default PaginationTable;
