"use client";

import ProductListCard from "./cards/productListCard";
import PaginaionBtn from "./button/paginationBtn";
import FilterBtn from "./button/filterBtn";
import SearchBar from "./bars/searchBar";
import { useCallback, useEffect, useState } from "react";
//============================================================Data===========================================================================
interface product {
  id: number;
  imgSrc: string;
  name: string;
  description: string;
  price: string;
  period: string;
  rating: string;
}
export const productList: product[] = [
  {
    id: 1,
    imgSrc: "/vercel.svg",
    name: "Mac",
    description: "ปล่อยเช่า mac",
    price: "50",
    period: "1-14",
    rating: "5",
  },
  {
    id: 2,
    imgSrc: "/vercel.svg",
    name: "Asus",
    description: "ปล่อยเช่า mac",
    price: "50",
    period: "1-14",
    rating: "5",
  },
  {
    id: 3,
    imgSrc: "/vercel.svg",
    name: "Del",
    description: "ปล่อยเช่า mac",
    price: "50",
    period: "1-14",
    rating: "5",
  },
  {
    id: 4,
    imgSrc: "/vercel.svg",
    name: "Del",
    description: "ปล่อยเช่า mac",
    price: "50",
    period: "1-14",
    rating: "5",
  },
  {
    id: 5,
    imgSrc: "/vercel.svg",
    name: "Del",
    description: "ปล่อยเช่า mac",
    price: "50",
    period: "1-14",
    rating: "5",
  },
  {
    id: 6,
    imgSrc: "/vercel.svg",
    name: "Del",
    description: "ปล่อยเช่า mac",
    price: "50",
    period: "1-14",
    rating: "5",
  },
  {
    id: 7,
    imgSrc: "/vercel.svg",
    name: "Sleep",
    description: "ปล่อยเช่า mac",
    price: "50",
    period: "1-14",
    rating: "5",
  },
  {
    id: 8,
    imgSrc: "/vercel.svg",
    name: "Predator",
    description: "ปล่อยเช่า mac",
    price: "50",
    period: "1-14",
    rating: "5",
  },
];
//============================================================================================================
function ProductList() {
  const [inputValue, setInputValue] = useState<string>("");
  const [initialList] = useState(productList);
  const [filteredList, setFilteredList] = useState(productList);
  const searchHandler = useCallback(() => {
    const filteredData = initialList.filter((product) => {
      return product.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilteredList(filteredData);
  }, [initialList, inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchHandler();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchHandler]);
  return (
    <div>
      <div className="py-8 flex items-center">
        <FilterBtn></FilterBtn>
        <div className="grow-[5] mx-8 h-0 flex items-center justify-center border-dashed border border-black"></div>
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
        ></SearchBar>
      </div>
      {filteredList.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
          {inputValue.length > 0
            ? filteredList
                .slice(0, 6)
                .map(
                  (
                    { id, imgSrc, name, description, price, period, rating },
                    index
                  ) => (
                    <ProductListCard
                      key={index}
                      id={id}
                      imgSrc={imgSrc}
                      name={name}
                      description={description}
                      price={price}
                      period={period}
                      rating={rating}
                    ></ProductListCard>
                  )
                )
            : initialList
                .slice(0, 6)
                .map(
                  (
                    { id, imgSrc, name, description, price, period, rating },
                    index
                  ) => (
                    <ProductListCard
                      key={index}
                      id={id}
                      imgSrc={imgSrc}
                      name={name}
                      description={description}
                      price={price}
                      period={period}
                      rating={rating}
                    ></ProductListCard>
                  )
                )}
        </div>
      ) : (
        <div className="flex">
          <div className="grow flex items-center justify-center">
            ไม่พบข้อมูลนะจ๊ะ
          </div>
        </div>
      )}

      <div className="flex justify-end my-10">
        {["1", "2", "3", "4", "..."].map((num) => (
          <PaginaionBtn key={num} number={num}></PaginaionBtn>
        ))}
      </div>
    </div>
  );
}
export default ProductList;
