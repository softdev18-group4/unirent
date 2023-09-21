"use client";

import Link from "next/link";
import SearchBar from "../components/searchBar";
import { useState } from "react";
import TableHeader from "../components/tableHeader";
import ProductCard from "../components/productCard";

function ProductsPage() {
  const [inputValue, setInputValue] = useState<string>("");
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
      <TableHeader></TableHeader>
      {[1, 2, 3, 4, 5].map((tmp, index) => (
        <ProductCard
          key={index}
          imgSrc="/product.png"
          name="MacBook Air"
          status="ว่าง"
          period="รายวัน / รายเดือน"
          price="100/1500"
          date="24 Aug, 2023"
          timeleft="10 ปี"
        ></ProductCard>
      ))}
    </div>
  );
}
export default ProductsPage;
