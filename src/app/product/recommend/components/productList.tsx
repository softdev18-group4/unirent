"use client";

import ProductListCard from "./cards/productListCard";
import PaginaionBtn from "./button/paginationBtn";
import FilterBtn from "./button/filterBtn";
import SearchBar from "./bars/searchBar";
import { use, useCallback, useEffect, useState } from "react";
import { product } from "@/redux/features/productSlice";
import LoadingCard from "./cards/loadingCard";
//============================================================Data===========================================================================
interface product {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  availability: boolean;
  availableDays: {
    startDate: Date;
    endDate: Date;
  };
  specifications: {
    brand: string;
    model: string;
    processor: string;
    graphicCard: string;
    ramSize: number;
    storageSize: number;
  };
}
//============================================================================================================
function ProductList() {
  const [inputValue, setInputValue] = useState<string>("");
  const [productInfo, setProductInfo] = useState<product[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const getData = async (page: number) => {
    const query = await fetch(
      "https://api-unirent.1tpp.dev/products/paginate/filter?page=" +
        page +
        "&perPage=6",
      {
        method: "GET",
      }
    );
    const response = await query.json();
    setLoading(false);
    setProductInfo(response);
    console.log("this is page " + page);
  };
  const childSetPage = (page: number) => {
    setPage(page);
    setLoading(true);
  };
  //======================================== data ===========================================
  useEffect(() => {
    if (inputValue == "") getData(page);
  }, [page]);
  //=========================================================================================
  const searchHandler = useCallback(async () => {
    if (inputValue != "") {
      const query = await fetch(
        "https://api-unirent.1tpp.dev/products/paginate/search?input=" +
          inputValue,
        {
          method: "GET",
        }
      );
      const response = await query.json();
      setLoading(false);
      setProductInfo(response);
    } else {
      getData(page);
    }
  }, [inputValue, page]);

  useEffect(() => {
    setPage(1);
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchHandler();
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchHandler]);
  //=========================================================================================
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
      {isLoading ? (
        <div className="flex">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
          </div>
        </div>
      ) : productInfo.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {productInfo
            .slice(0, 6)
            .map(
              (
                {
                  id,
                  name,
                  description,
                  ownerId,
                  availability,
                  availableDays: { startDate, endDate },
                  specifications: {
                    brand,
                    model,
                    processor,
                    graphicCard,
                    ramSize,
                    storageSize,
                  },
                },
                index
              ) => (
                <ProductListCard
                  key={index}
                  id={id}
                  name={name}
                  description={description}
                  ownerId={ownerId}
                  availability={availability}
                  availableDays={{ startDate, endDate }}
                  specifications={{
                    brand,
                    model,
                    processor,
                    graphicCard,
                    ramSize,
                    storageSize,
                  }}
                ></ProductListCard>
              )
            )}
        </div>
      ) : (
        <div className="flex">
          <div className="grow flex items-center justify-center text-3xl">
            ไม่พบข้อมูล
          </div>
          {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
          </div> */}
        </div>
      )}

      <div className="flex justify-end my-10">
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
export default ProductList;
