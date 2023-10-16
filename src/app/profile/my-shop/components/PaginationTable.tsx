"use client";

import TableHeader from "./TableHeader";
import ProductCard from "./ProductCard";
import PaginaionBtn from "./PaginationBtn";
import SearchBar from "./SearchBar";
import { useCallback, useEffect, useState } from "react";
import LoadingCard from "./LoadingCard";
import { API_HOST } from "@/config";
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
  const childSetPage = (setpage: number) => {
    if (setpage != page) {
      setPage(setpage);
      setLoading(true);
    }
  };
  //manully token
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTA3ZDczMzg4ZDdhYzlkMmFkNzFmYjUiLCJyb2xlIjoidXNlciIsImlhdCI6MTY5NzI2MTYyNSwiZXhwIjoxNjk3MzQ4MDI1fQ.HI94R0Xu0QLHBIvAaW5j2QhK7nNQJ2HcjwF8M48KaLI";
  //fetch data
  const getData = async (page: number) => {
    if (api == "yourProduct") {
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
      getTableData(response);
    } else if (api == "yourOrder") {
      const query = await fetch(
        //if api is yourOrder fetch from your order
        `${API_HOST}/orders/yourOrder/byUser/search?page=${page}&perPage=5&keyword=${inputValue}&searchBy=name`,
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
  //handle delete product
  const handleDelete = async (productId: string) => {
    //fetch to delete
    setLoading(true);
    const query = await fetch(`${API_HOST}/products/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const response = await query.json();
    // console.log(response);

    getData(page);
  };
  //month to string
  const monthToString = (month: number) => {
    if (month == 0) return "Jan";
    else if (month == 1) return "Feb";
    else if (month == 2) return "Mar";
    else if (month == 3) return "Apr";
    else if (month == 4) return "May";
    else if (month == 5) return "Jun";
    else if (month == 6) return "Jul";
    else if (month == 7) return "Aug";
    else if (month == 8) return "Sep";
    else if (month == 9) return "Oct";
    else if (month == 10) return "Nov";
    else if (month == 11) return "Dec";
  };
  //transfrom array of product data to table data
  const getTableData = (data: any) => {
    //data:any input depends on (Your Order) and (Your Product) api
    //transfrom array of product data to table data
    const tabledata: tableData[] = [];
    if (api == "yourProduct") {
      data.map((tmp: any) => {
        //period and price string
        let period: string = "";
        let price: string = "";
        for (const rentalOption of tmp.rentalOptions) {
          period += rentalOption.type + "/";
          price += rentalOption.priceRate + "/";
        }
        if (period != "") period = period.slice(0, -1);
        if (price != "") price = price.slice(0, -1);
        let day, month, year;
        day = new Date(tmp.availableDays.startDate).getDay() + 1;
        month = monthToString(new Date(tmp.availableDays.startDate).getMonth());
        year = new Date(tmp.availableDays.startDate).getFullYear();
        const onedata: tableData = {
          imgSrc: "/product.png",
          name: tmp.name,
          status: tmp.availability ? "ว่าง" : "กำลังปล่อยเช่า",
          period: period,
          price: price,
          date: day + " " + month + " " + year,
          timeleft: "",
          productId: tmp.id,
        };
        tabledata.push(onedata);
      });
    }
    //transfrom array of order data to table data
    else if (api == "yourOrder") {
      data.map((tmp: any) => {
        let day, month, year;
        day = new Date(tmp.product.availableDays.startDate).getDay() + 1;
        month = monthToString(
          new Date(tmp.product.availableDays.startDate).getMonth()
        );
        year = new Date(tmp.product.availableDays.startDate).getFullYear();
        //get Product of the order
        const onedata: tableData = {
          imgSrc: "/product.png",
          name: tmp.product.name,
          status: tmp.status == "wait" ? "กำลังดำเนินการ" : "ได้รับแล้ว",
          period: tmp.rentalOption.type,
          price: tmp.rentalOption.priceRate,
          date: day + " " + month + " " + year,
          timeleft: tmp.rentTime + " ชั่วโมง",
          productId: tmp.productId,
        };
        tabledata.push(onedata);
      });
    }
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
      </div>
    </div>
  );
}
export default PaginationTable;
