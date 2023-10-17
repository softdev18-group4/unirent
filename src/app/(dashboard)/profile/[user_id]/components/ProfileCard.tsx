"use client";

import { API_HOST } from "@/config";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

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
  //info
  const [avgRating, setAvgRating] = useState(0);
  const [allReviews, setAllReviews] = useState(0);
  const [productInfo, setProductInfo] = useState<product[]>([]);
  //user
  const [user, setUser] = useState<User>();
  //image
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { data: session, status, update } = useSession();
  const id = userId == "my-profile" ? session?.user.data.id : userId;
  const token = session?.user.accessToken;
  useEffect(() => {
    if (status === "authenticated" && session) getData();
    //console.log(token);
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
  const handleFileInputChange = async () => {
    if (
      fileInputRef.current &&
      fileInputRef.current.files &&
      fileInputRef.current.files.length > 0
    ) {
      const file = fileInputRef.current.files[0];
      setSelectedImage(URL.createObjectURL(file));
      const data = new FormData();
      data.append("image", file);
      const query = await fetch(`/api/services/upload`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
        body: data,
      });
      const response = await query.json();
      const hashedimg = response.imageUrl;
      const updateUserImg = await fetch(`/api/services/users/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          profileImage: `${hashedimg}`,
        }),
      });
      const updateUserResponse = await updateUserImg.json();
      // console.log(updateUserResponse);
      await update({
        ...session,
        user: {
          ...session?.user,
          data: {
            ...session?.user.data,
            profileImage: `${hashedimg}`,
          },
        },
      });
    }
  };
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
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
              {userId == "my-profile" || userId == session?.user.data.id ? (
                <div className="w-36 h-36 aspect-square relative">
                  <input
                    type="file"
                    name="productImage"
                    accept="image/*"
                    id="imageInput"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileInputChange}
                  ></input>
                  <img
                    src={
                      selectedImage != null
                        ? selectedImage
                        : session?.user.data.profileImage != null
                        ? session.user.data.profileImage
                        : "https://storage-unirent.1tpp.dev/unirent/default-profile.svg"
                    }
                    alt="Image of the author"
                    width={200}
                    height={200}
                    className=" w-full h-full rounded-full "
                  />
                  <div
                    onClick={handleClick}
                    className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-50 flex justify-center items-center bg-slate-200 rounded-full cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
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
              )}
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
              {userId == "my-profile" || userId == session?.user.data.id ? (
                //คิดก่อนว่าทำดีไหม
                <div className="hidden w-24 h-10 bg-slate-300 hover:bg-slate-400 rounded-full justify-center items-center cursor-pointer">
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
              คะแนนรีวิวเฉลี่ย:{" "}
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
