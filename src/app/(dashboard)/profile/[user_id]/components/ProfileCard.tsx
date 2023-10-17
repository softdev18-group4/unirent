"use client";

import { API_HOST } from "@/config";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

//============================================================Data===========================================================================
interface product {
  reviews: {
    rating: number;
  }[];
}
interface User {
  imgSrc: string;
  firstName: string;
  lastName: string;
  email: string;
}
//============================================================================================================

function ProfileCard({ userId }: { userId: string }) {
  const [isLoading, setLoading] = useState(true);
  const [avgRating, setAvgRating] = useState(0);
  const [allReviews, setAllReviews] = useState(0);
  const [productInfo, setProductInfo] = useState<product[]>([]);
  const [user, setUser] = useState<User>();

  const { data: session, status } = useSession();
  const id = userId == "my-profile" ? session?.user.data.id : userId;
  useEffect(() => {
    if (status === "authenticated" && session) getData();
  }, [session]);
  const getData = async () => {
    const query = await fetch(
      `${API_HOST}/products/userProduct/${id}?page=1&perPage=10000`,
      //`/api/services/products/userProduct/${id}?page=1&perPage=10000`,
      {
        method: "GET",
      }
    );
    const response = await query.json();
    setProductInfo(response);
    //fetch user data
    const queryUser = await fetch(
      `${API_HOST}/users/${id}`,
      // `/api/services/users/${id}`,
      {
        method: "GET",
      }
    );
    //all reviews
    const responseUser = await queryUser.json();
    setUser(responseUser);

    let sum = 0;
    for (const product of productInfo) {
      setAllReviews(allReviews + product.reviews.length);
      for (const review of product.reviews) {
        sum += review.rating;
      }
    }
    setAvgRating(Math.round((sum / allReviews) * 100) / 100);
    setLoading(false);
  };
  const handleChat = () => {
    //go to chat room
  };
  return (
    <div>
      <div className="my-4 w-full rounded-2xl bg-white h-96 lg:h-48 flex justify-end items-center ">
        <div className="w-full h-full flex-col lg:flex-row flex justify-evenly items-center p-4 gap-2">
          <div className="h-[40%] lg:h-full w-fit lg:w-[40%] flex items-center justify-center gap-4">
            <div className="w-36 h-36 aspect-square">
              <img
                src={
                  user?.imgSrc != null
                    ? user.imgSrc
                    : "https://storage-unirent.1tpp.dev/unirent/default-profile.svg"
                }
                alt="Image of the author"
                width={200}
                height={200}
                className=" w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1 w-fit lg:w-[50%] truncate">
              <div className="text-2xl font-bold">
                {" "}
                {user != null
                  ? `${user.firstName} ${user.lastName}`
                  : "loading"}
              </div>
              <div className="text-lg font-normal text-slate-400">
                {user != null ? `${user.email}` : "loading"}
              </div>
              {userId == "my-profile" ? (
                <div className="hidden w-24 h-10 bg-slate-300 hover:bg-slate-400 rounded-full flex justify-center items-center cursor-pointer">
                  แก้ไข
                </div>
              ) : (
                <div
                  onClick={handleChat}
                  className="w-24 h-10 bg-slate-300 hover:bg-slate-400 rounded-full flex justify-center items-center cursor-pointer"
                >
                  แชทเลย
                </div>
              )}
            </div>
          </div>
          <div className="w-[80%] lg:w-[10%] h-[10%] lg:h-[80%] border-t-2 border-l-0 lg:border-t-0 lg:border-l-2"></div>
          <div className="grid grid-cols-2 h-[50%] w-fit lg:w-[70%] gap-2">
            <div className="flex gap-2">
              รายการสินค้า:{" "}
              <div className="text-[coral]"> {productInfo.length} รายการ</div>
            </div>
            <div className="flex gap-2">
              จำนวนรีวิวทั้งหมด:{" "}
              {allReviews != 0 ? (
                <div className="text-[coral]">{allReviews} รีวิว</div>
              ) : (
                <div className="text-[coral]">ไม่มีรีวิว</div>
              )}
            </div>
            <div className="flex gap-2">
              {/* เข้าร่วมเมื่อ: <div className="text-[coral]">10/03/2546</div> */}
            </div>
            <div className="flex gap-2">
              คำแนนรีวิวเฉลี่ย:{" "}
              {allReviews != 0 ? (
                <div className="text-[coral]">{avgRating}</div>
              ) : (
                <div className="text-[coral]">ไม่มีรีวิว</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
