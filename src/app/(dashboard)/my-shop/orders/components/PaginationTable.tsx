"use client";

import TableHeader from "./TableHeader";
import ProductCard from "./ProductCard";
import PaginaionBtn from "../../components/PaginationBtn";
import SearchBar from "../../components/SearchBar";
import { useCallback, useEffect, useState } from "react";
import LoadingCard from "./LoadingCard";
import { API_HOST } from "@/config";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

//========================================================Data=====================================================
interface tableData {
  imgSrc: string;
  name: string;
  status: string;
  period: string;
  price: string;
  date: string;
  timeleft: string;
  id: string;
}
//=================================================================================================================
function PaginationTable() {
  const [inputValue, setInputValue] = useState<string>("");
  const [tableInfo, setTableInfo] = useState<tableData[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { push } = useRouter();
  //token
  const { data: session, status } = useSession();
  const token = session?.user.accessToken;

  const childSetPage = (setpage: number) => {
    if (setpage != page) {
      setPage(setpage);
      setLoading(true);
    }
  };
  //fetch data
  const getData = async (page: number) => {
    if (session) {
      const query = await fetch(
        //if api is yourOrder fetch from your order
        `/api/services/orders/yourOrder/byUser/search?page=${page}&perPage=5&keyword=${inputValue}&searchBy=name`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const response = await query.json();
      //console.log(response);
      getTableData(response);
    }
    setLoading(false);
  };
  //handle verify product
  const handleVerify = async (orderId: string) => {
    //fetch to delete
    setLoading(true);
    const query = await fetch(`/api/services/orders/${orderId}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "Done",
      }),
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
  const getTimeleft = (timeleft: number) => {
    const remainday = Math.floor(timeleft);
    if (remainday == 0) {
      const remainhour = Math.floor(timeleft * 24);
      if (remainhour > 0) return `เหลือ ${remainhour} ชั่วโมง`;
      return "เหลือน้อยกว่า 1 ชั่วโมง";
    } else {
      return `เหลือ ${remainday} วัน`;
    }
  };
  //transfrom array of product data to table data
  const getTableData = (data: any) => {
    //data:any input depends on (Your Order) and (Your Product) api
    //transfrom array of product data to table data
    const tabledata: tableData[] = [];

    //transfrom array of order data to table data
    data.map((tmp: any) => {
      let day, month, year;
      day = new Date(tmp.startRent).getDate();
      month = monthToString(new Date(tmp.startRent).getMonth());
      year = new Date(tmp.startRent).getFullYear();
      const timeleft =
        tmp.rentTime -
        Math.round(
          ((new Date().getTime() - new Date(tmp.startRent).getTime()) /
            86400000) *
            100
        ) /
          100;
      const timeleftStr = getTimeleft(timeleft);
      //get Product of the order
      const onedata: tableData = {
        imgSrc: tmp.product.imageName[0]
          ? tmp.product.imageName[0]
          : "/product.png",
        name: tmp.product.name,
        status: tmp.status == "waiting" ? "กำลังดำเนินการ" : "ได้รับแล้ว",
        period: tmp.rentalOption.type,
        price: tmp.rentalOption.priceRate,
        date: day + " " + month + " " + year,
        timeleft: timeleftStr,
        id: tmp.id,
      };
      tabledata.push(onedata);
    });

    setTableInfo(tabledata);
    //for testing
    // setTableInfo([
    //   {
    //     imgSrc: "/product.png",
    //     name: "test",
    //     status: "เสร็จสิน",
    //     period: "string",
    //     price: "string",
    //     date: "string",
    //     timeleft: "string",
    //     id: "string",
    //   },
    // ]);
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
  //initial fetch
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
                  period={data.period}
                  price={data.price}
                  date={data.date}
                  timeleft={data.timeleft}
                  orderId={data.id}
                  canDelete={false}
                  handleVerify={handleVerify}
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
