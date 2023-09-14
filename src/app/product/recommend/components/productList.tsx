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
    imgSrc:
      "https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
    name: "Mac",
    description: "ปล่อยเช่า mac",
    price: "50",
    period: "1-14",
    rating: "5",
  },
  {
    id: 2,
    imgSrc:
      "https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
    name: "Asus",
    description: "ปล่อยเช่า mac",
    price: "50",
    period: "1-14",
    rating: "5",
  },
  {
    id: 3,
    imgSrc:
      "https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
    name: "Del",
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
      <div className="grid grid-cols-3 gap-10">
        {inputValue.length > 0
          ? filteredList.map(
              ({ id, imgSrc, name, description, price, period, rating }) => (
                <ProductListCard
                  key={id}
                  imgSrc={imgSrc}
                  name={name}
                  description={description}
                  price={price}
                  period={period}
                  rating={rating}
                ></ProductListCard>
              )
            )
          : initialList.map(
              ({ id, imgSrc, name, description, price, period, rating }) => (
                <ProductListCard
                  key={id}
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
      <div className="flex justify-end my-10">
        {["1", "2", "3", "4", "..."].map((num) => (
          <PaginaionBtn key={num} number={num}></PaginaionBtn>
        ))}
      </div>
    </div>
  );
}
export default ProductList;
