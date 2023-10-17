"use client";

import React, { useCallback, useEffect, useState } from "react";
import ProductListCard from "./cards/ProductListCard";
import PaginationBtn from "./button/PaginationBtn";
import FilterBtn from "./button/FilterBtn";
import SearchBar from "./bars/SearchBar";
import LoadingCard from "./cards/LoadingCard";

interface Product {
  id: string;
  name: string;
  description: string;
  imageName: string[];
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

function ProductList() {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchBy, setSearchBy] = useState<string>("name");
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  // Pagination
  const fetchData = async (pageNumber: number) => {
    const query = await fetch(
      `/api/services/products/?page=${pageNumber}&perPage=6&searchBy=${searchBy}&keyword=${inputValue}`,
      {
        method: "GET",
      }
    );
    const response = await query.json();
    setPage(response.currentPage);
    setTotalPage(response.totalPages);
    setProducts(response.data);
    setLoading(false);
  };

  const childSetPage = (newPage: number) => {
    if (newPage !== page) {
      setPage(newPage);
      setLoading(true);
    }
  };

  const setSearchByValue = (keyword: string) => {
    if (keyword !== searchBy) {
      setSearchBy(keyword);
      setLoading(true);
    }
  };

  const searchHandler = useCallback(() => {
    childSetPage(1);
  }, [inputValue, searchBy]);

  useEffect(() => {
    fetchData(page);
  }, [page, inputValue, searchBy]);

  useEffect(() => {
    const timer = setTimeout(searchHandler, 300);
    return () => clearTimeout(timer);
  }, [searchHandler]);

  return (
    <div>
      <div className="py-8 flex items-center">
        <FilterBtn nowSearch={searchBy} setSearchBy={setSearchByValue} />
        <div className="grow-[5] mx-4 md:mx-8 h-0 flex items-center justify-center border-dashed border border-black"></div>
        <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      </div>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {Array.from({ length: 6 }).map((_, index) => (
            <LoadingCard key={index} />
          ))}
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {products.slice(0, 6).map((product, index) => (
            <ProductListCard
              key={product.id}
              {...product}
              imgSrc={product.imageName[0]}
            />
          ))}
        </div>
      ) : (
        <div className="grow flex items-center justify-center text-3xl">
          ไม่พบข้อมูล
        </div>
      )}

      <div className="flex justify-end my-10">
        {Array.from({ length: totalPage }).map((_, index) => (
          <PaginationBtn
            key={index}
            number={index + 1}
            ishighlight={index + 1 === page}
            childSetPage={childSetPage}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
