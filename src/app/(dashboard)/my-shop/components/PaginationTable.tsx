"use client";

import TableHeader from "./TableHeader";
import ProductCard from "./ProductCard";
import PaginationBtn from "./PaginationBtn";
import SearchBar from "./SearchBar";
import { useCallback, useEffect, useState } from "react";
import LoadingCard from "./LoadingCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface TableData {
  imgSrc: string;
  name: string;
  status: string;
  period: string;
  price: string;
  date: string;
  timeleft: string;
  productId: string;
}

function PaginationTable({ api }: { api: string }) {
  const [inputValue, setInputValue] = useState<string>("");
  const [tableInfo, setTableInfo] = useState<TableData[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { push } = useRouter();
  //token
  const { data: session, status } = useSession();
  const token = session?.user.accessToken;

  const childSetPage = (setpage: number) => {
    if (setpage !== page) {
      setPage(setpage);
      setLoading(true);
    }
  };

  //fetch data
  const getData = async (page: number) => {
    if (session) {
      const apiEndpoint =
        api === "yourProduct"
          ? "/api/services/products/yourProduct"
          : "/api/services/orders/yourOrder";
      try {
        const query = await fetch(
          `${apiEndpoint}/byUser/search?page=${page}&perPage=5&keyword=${inputValue}&searchBy=name`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const response = await query.json();
        getTableData(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
  };

  const handleDelete = async (productId: string) => {
    setLoading(true);
    try {
      const query = await fetch(`/api/services/products/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await query.json();
      getData(page);
    } catch (error) {
      console.error("Error deleting product:", error);
      setLoading(false);
    }
  };

  //month to string
  const monthToString = (month: number) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[month];
  };

  const getTableData = (data: any) => {
    const tableData: TableData[] = [];
    if (api === "yourProduct") {
      data.forEach((tmp: any) => {
        const period = tmp.rentalOptions
          .map((option: any) => option.type)
          .join("/");
        const price = tmp.rentalOptions
          .map((option: any) => option.priceRate)
          .join("/");
        const startDate = new Date(tmp.availableDays.startDate);
        const onedata: TableData = {
          imgSrc: tmp.imageName[0] ? `${tmp.imageName[0]}` : "/product.png",
          name: tmp.name,
          status: tmp.availability ? "ว่าง" : "กำลังปล่อยเช่า",
          period: period,
          price: price,
          date: `${startDate.getDate()} ${monthToString(
            startDate.getMonth()
          )} ${startDate.getFullYear()}`,
          timeleft: "",
          productId: tmp.id,
        };
        tableData.push(onedata);
      });
    } else if (api === "yourOrder") {
      data.forEach((tmp: any) => {
        const startDate = new Date(tmp.product.availableDays.startDate);
        const onedata: TableData = {
          imgSrc: tmp.imageName[0] ? tmp.imageName[0] : "/product.png",
          name: tmp.product.name,
          status: tmp.status === "wait" ? "กำลังดำเนินการ" : "ได้รับแล้ว",
          period: tmp.rentalOption.type,
          price: tmp.rentalOption.priceRate,
          date: `${startDate.getDate()} ${monthToString(
            startDate.getMonth()
          )} ${startDate.getFullYear()}`,
          timeleft: `${tmp.rentTime} ชั่วโมง`,
          productId: tmp.productId,
        };
        tableData.push(onedata);
      });
    }
    setTableInfo(tableData);
  };

  //handle search
  const searchHandler = useCallback(() => {
    if (page !== 1) {
      childSetPage(1);
    } else {
      setLoading(true);
      getData(page);
    }
  }, [inputValue, page]);

  //initial fetch
  useEffect(() => {
    if (status === "unauthenticated") {
      push("/auth/sign-in");
    } else if (status === "authenticated" && session) {
      getData(page);
    }
  }, [page, session, push]);

  //check if inputValue changes every 300 milliseconds
  useEffect(() => {
    const timer = setTimeout(() => {
      searchHandler();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, searchHandler]);

  return (
    <div>
      <div className="my-4 w-full rounded-2xl bg-white h-24 flex justify-end items-center p-4">
        <SearchBar
          inputValue={inputValue}
          setInputValue={setInputValue}
          placeholder="Search Products"
        />
      </div>
      <div className="relative overflow-x-auto mt-4">
        <table className="w-full border-separate border-spacing-y-2 text-xs md:text-sm lg:text-base table-fixed">
          <TableHeader />
          {isLoading ? (
            <tbody>
              {[1, 2, 3, 4, 5].map((index) => (
                <LoadingCard key={index} />
              ))}
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
                  canDelete={api === "yourProduct"}
                  handleDelete={handleDelete}
                />
              </tbody>
            ))
          ) : null}
        </table>
      </div>
      {!isLoading && tableInfo.length === 0 ? (
        <div className="flex justify-center items-center text-3xl w-full h-20">
          ไม่พบข้อมูล
        </div>
      ) : null}
      <div className="flex justify-end my-5">
        {[...Array(5)].map((_, index) => (
          <PaginationBtn
            number={page <= 3 ? index + 1 : page - 2 + index}
            ishighlight={page === (page <= 3 ? index + 1 : page - 2 + index)}
            key={index}
            childSetPage={childSetPage}
          />
        ))}
      </div>
    </div>
  );
}

export default PaginationTable;
