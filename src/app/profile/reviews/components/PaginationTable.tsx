"use client";

import TableHeader from "./TableHeader";
import ProductCard from "./ProductCard";
import PaginaionBtn from "./PaginationBtn";
import SearchBar from "./SearchBar";
import { useCallback, useEffect, useState } from "react";
import LoadingCard from "./LoadingCard";

import { API_HOST } from "@/app/config";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
//========================================================Data=====================================================
interface tableData {
  imgSrc: string;
  name: string;
  status: string;
  productId: string;
  rating: number;
}
//=================================================================================================================
function PaginationTable() {
  const [inputValue, setInputValue] = useState<string>("");
  const [tableInfo, setTableInfo] = useState<tableData[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { push } = useRouter();
  const childSetPage = (setpage: number) => {
    if (setpage != page) {
      setPage(setpage);
      setLoading(true);
    }
  };
  const { data: session, status } = useSession();
  const token = session?.user.accessToken;
  //fetch data
  const getData = async (page: number) => {
    //if api is yourProduct fetch from your product
    const query = await fetch(
      `${API_HOST}/products/yourProduct/byUser/search?page=${page}&perPage=5&keyword=${inputValue}&searchBy=name`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const response = await query.json();
    // console.log(response);
    getTableData(response);
    setLoading(false);
  };
  //average
  const getAvgRating = (reviews: any) => {
    if (!reviews[0]) return -1;
    let sumrating: number = 0;
    let all: number = 0;
    for (const review of reviews) {
      sumrating += review.rating;
      all++;
    }
    return Math.round((sumrating / all) * 100) / 100;
  };
  //transfrom array of product data to table data
  const getTableData = (data: any) => {
    //data:any input depends on (Your Order) and (Your Product) api
    //transfrom array of product data to table data
    const tabledata: tableData[] = [];
    data.map((tmp: any) => {
      const onedata: tableData = {
        imgSrc: tmp.imageName[0]
          ? "https://storage-unirent.1tpp.dev/unirent/" + tmp.imageName[0]
          : "/product.png",
        name: tmp.name,
        status: tmp.availability ? "ว่าง" : "กำลังปล่อยเช่า",
        productId: tmp.id,
        rating: getAvgRating(tmp.reviews),
      };
      tabledata.push(onedata);
    });

    setTableInfo(tabledata);
  };
  // //initial fetch and if page change fetch again
  // useEffect(() => {
  //   if (inputValue == "") getData(page);
  // }, [page]);

  //handle search
  const searchHandler = useCallback(async () => {
    if (page != 1) childSetPage(1);
    else {
      setLoading(true);
      getData(page);
    }
  }, [inputValue]);
  //if inputvalue change set page=1
  useEffect(() => {
    //setLoading(true);
    if (status === "unauthenticated") push("/auth/sign-in");
    if (status === "authenticated" && session) getData(page);
  }, [page, session]);
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
      <div className="my-4 w-full rounded-2xl bg-white h-24 flex justify-end items-center p-4">
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          placeholder="Search Products"
        ></SearchBar>
      </div>
      <div className="relative overflow-x-auto mt-4">
        <table className="w-full border-separate border-spacing-y-2 text-xs md:text-sm lg:text-base table-fixed">
          <TableHeader></TableHeader>
          {isLoading ? (
            <tbody>
              <LoadingCard></LoadingCard>
              <LoadingCard></LoadingCard>
              <LoadingCard></LoadingCard>
              <LoadingCard></LoadingCard>
              <LoadingCard></LoadingCard>
            </tbody>
          ) : tableInfo.length > 0 ? (
            tableInfo.map((data, index) => (
              <tbody key={index}>
                <ProductCard
                  imgSrc={data.imgSrc}
                  name={data.name}
                  status={data.status}
                  productId={data.productId}
                  rating={data.rating}
                ></ProductCard>
              </tbody>
            ))
          ) : (
            ""
          )}
        </table>
      </div>
      {!isLoading && tableInfo.length == 0 ? (
        <div className="flex justify-center items-center text-3xl w-full h-20">
          ไม่พบข้อมูล
        </div>
      ) : (
        ""
      )}
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
      </div>
    </div>
  );
}
export default PaginationTable;
