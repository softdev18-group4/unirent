"use client";

import ProductListCard from "./cards/productListCard";
import PaginaionBtn from "./button/paginationBtn";
import FilterBtn from "./button/filterBtn";
import SearchBar from "./bars/searchBar";
import { use, useCallback, useEffect, useState } from "react";
import { product } from "@/redux/features/productSlice";
import LoadingCard from "./cards/loadingCard";

import { API_HOST } from "@/app/config";

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
  rentalOptions: {
    id: string;
    productId: string;
    type: string;
    priceRate: number;
  }[];
  reviews: {
    rating: number;
  }[];
}
//============================================================================================================
function ProductList() {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchBy, setsearchBy] = useState<string>("name");
  const [productInfo, setProductInfo] = useState<product[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  //pagination
  const getData = async (page: number) => {
    const query = await fetch(
      `${API_HOST}/products/?page=${page}&perPage=6&searchBy=${searchBy}&keyword=${inputValue}`,
      {
        method: "GET",
      }
    );
    const response = await query.json();
    setLoading(false);
    setProductInfo(response);
    //  console.log("this is page " + page);
  };
  const childSetPage = (setpage: number) => {
    if (setpage != page) {
      setPage(setpage);
      setLoading(true);
    }
  };
  const setSearchBy = (keyword: string) => {
    if (keyword != searchBy) {
      setsearchBy(keyword);
      setLoading(true);
    }
  };
  // //initial fetch and if page change and no input get pagination
  // useEffect(() => {
  //   if (inputValue == "") getData(page);
  // }, [page]);
  //search if inputvalue change or page change and has input value
  const searchHandler = useCallback(async () => {
    if (page != 1) childSetPage(1);
    else {
      setLoading(true);
      getData(page);
    }
  }, [inputValue, searchBy]);
  //if inputvalue change set page=1
  useEffect(() => {
    getData(page);
  }, [page]);
  // check if inputvalue change every 300 millisec
  useEffect(() => {
    const timer = setTimeout(() => {
      searchHandler();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchHandler]);
  //=========================================================================================
  return (
    <div>
      <div className="py-8 flex items-center">
        <FilterBtn nowSearch={searchBy} setSearchBy={setSearchBy}></FilterBtn>
        <div className="grow-[5] mx-4 md:mx-8 h-0 flex items-center justify-center border-dashed border border-black"></div>
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
        ></SearchBar>
      </div>
      {isLoading ? (
        <div className="flex">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
          </div>
        </div>
      ) : productInfo.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
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
                  rentalOptions,
                  reviews,
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
                  rentalOptions={rentalOptions}
                  reviews={reviews}
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
