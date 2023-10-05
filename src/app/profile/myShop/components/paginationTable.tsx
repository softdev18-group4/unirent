"use client";

import TableHeader from "../components/tableHeader";
import ProductCard from "../components/productCard";
import PaginaionBtn from "../components/paginationBtn";
import SearchBar from "../components/searchBar";
import { useCallback, useEffect, useState } from "react";
import LoadingCard from "./loadingCard";
//========================================================Data=====================================================
interface tableData {
  imgSrc: string;
  name: string;
  status: string;
  period: string;
  price: string;
  date: string;
  timeleft: string;
  productId: string;
}
//=================================================================================================================
function PaginationTable({ api }: { api: string }) {
  const [inputValue, setInputValue] = useState<string>("");
  const [tableInfo, setTableInfo] = useState<tableData[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const childSetPage = (page: number) => {
    setPage(page);
    setLoading(true);
  };
  //fetch data
  const getData = async (page: number) => {
    //manully token
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTA3ZDczMzg4ZDdhYzlkMmFkNzFmYjUiLCJyb2xlIjoidXNlciIsImlhdCI6MTY5NjMzNzAxNywiZXhwIjoxNjk2NDIzNDE3fQ.-214NFUuyH3MqOcO_uarGO8kUlNiB1kU3cpguM_Zqis";
    if (api == "yourProduct") {
      //if api is yourProduct fetch from your product
      const query = await fetch(
        "https://api-unirent.1tpp.dev/products/yourProduct/byUser?page=" +
          page +
          "&perPage=5",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const response = await query.json();
      getTableData(response);
    } else if (api == "yourOrder") {
      const query = await fetch(
        //if api is yourOrder fetch from your order
        "https://api-unirent.1tpp.dev/orders/yourOrder/byUser?page=" +
          page +
          "&perPage=5",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const response = await query.json();
      getTableData(response);
    }
    setLoading(false);
  };
  //fetch product data by product id
  const getProduct = async (id: string) => {
    const query = await fetch("https://api-unirent.1tpp.dev/products/" + id, {
      method: "GET",
    });
    const response = await query.json();
    return response;
  };
  //transfrom array of product data to table data
  const getTableData = (data: any) => {
    //data:any input depends on (Your Order) and (Your Product) api
    //transfrom array of product data to table data
    const tabledata: tableData[] = [];
    if (api == "yourProduct") {
      data.map((tmp: any) => {
        const onedata: tableData = {
          imgSrc: "/product.png",
          name: tmp.name,
          status: tmp.availability ? "ว่าง" : "กำลังปล่อยเช่า",
          period: "skip",
          price: "skip",
          date: "skip",
          timeleft: "skip",
          productId: tmp.id,
        };
        tabledata.push(onedata);
      });
    }
    //transfrom array of order data to table data
    else if (api == "yourOrder") {
      data.map((tmp: any) => {
        //get Product of the order
        const productData: any = getProduct(tmp.productId);
        const onedata: tableData = {
          imgSrc: "/product.png",
          name: productData.name,
          status: "skip",
          period: "skip",
          price: "skip",
          date: "skip",
          timeleft: "skip",
          productId: tmp.productId,
        };
        tabledata.push(onedata);
      });
    }
    setTableInfo(tabledata);
  };
  //initial fetch and if page change fetch again
  useEffect(() => {
    if (inputValue == "") getData(page);
  }, [page]);
  //handle delete product
  const handleDelete = (productId: string) => {
    //fetch to delete
  };
  //handle search
  const searchHandler = useCallback(async () => {
    //check if have input
    if (inputValue != "") {
      //fetch using search
      setLoading(false);
    } else {
      getData(page);
    }
  }, [inputValue, page]);
  //if inputvalue change set page=1
  useEffect(() => {
    childSetPage(1);
  }, [inputValue]);
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
                  period={data.period}
                  price={data.price}
                  date={data.date}
                  timeleft={data.timeleft}
                  productId={data.productId}
                  canDelete={api == "yourProduct" ? true : false}
                  handleDelete={handleDelete}
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
        {}
      </div>
    </div>
  );
}
export default PaginationTable;
