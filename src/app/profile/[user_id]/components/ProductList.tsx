"use client";

import ProductCard from "./ProductCard";
import LoadingCard from "./LoadingCard";
import { API_HOST } from "@/config";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

//============================================================Data===========================================================================
interface product {
  id: string;
  name: string;
  description: string;
  imageName: string[];
  availableDays: {
    startDate: Date;
    endDate: Date;
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
function ProductList({ userId }: { userId: string }) {
  const [isLoading, setLoading] = useState(true);
  const [productInfo, setProductInfo] = useState<product[]>([]);

  const { data: session, status } = useSession();
  const id = userId == "my-profile" ? session?.user.data.id : userId;
  useEffect(() => {
    if (status === "authenticated" && session) getData();
  }, [session]);
  const getData = async () => {
    const query = await fetch(
      `/api/services/products/userProduct/${id}?page=1&perPage=10000`,
      {
        method: "GET",
      }
    );
    const response = await query.json();
    setProductInfo(response);
    setLoading(false);
  };
  return (
    <div>
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
          {productInfo.map(
            (
              {
                id,
                name,
                imageName,
                description,
                availableDays: { startDate, endDate },
                rentalOptions,
                reviews,
              },
              index
            ) => (
              <ProductCard
                key={index}
                id={id}
                name={name}
                imgSrc={imageName[0]}
                description={description}
                availableDays={{ startDate, endDate }}
                rentalOptions={rentalOptions}
                reviews={reviews}
              ></ProductCard>
            )
          )}
        </div>
      ) : (
        <div className="flex">
          <div className="grow flex items-center justify-center text-3xl">
            ไม่พบข้อมูลสินค้าของผู้ใช้
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
    </div>
  );
}
export default ProductList;
