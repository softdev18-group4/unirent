"use clients";
import Image from "next/image";
import Star from "../Star";
import { useEffect, useState } from "react";
function ProductListCard({
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
}: {
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
}) {
  const [rating, setRating] = useState<number>(0);
  const [day, setday] = useState<number>(0);
  const getAvgRating = () => {
    let sumrating: number = 0;
    let all: number = 0;
    for (const review of reviews) {
      sumrating += review.rating;
      all++;
    }
    setRating(Math.round((sumrating / all) * 100) / 100);
  };
  const getEndDate = () => {
    if (endDate != null) {
      //get remaining time in millisecond
      let time = new Date(endDate).getTime() - new Date().getTime();
      setday(Math.floor(time / 86400000));
    }
  };
  useEffect(() => {
    getAvgRating();
    getEndDate();
  }, []);
  return (
    <a
      href={"/product/detail/" + id}
      className="cursor-pointer drop-shadow-lg bg-white rounded-xl"
    >
      <div className="flex flex-col justify-center h-[100%]">
        {
          <Image
            src={"/product.png"}
            width={1000}
            height={1000}
            alt="Picture of the author"
            className="w-[100%] rounded-t-xl"
          />
        }

        <div className="grow p-4 lg:p-6 flex flex-col justify-between gap-5">
          <div>
            <div className="font-extrabold ">{name}</div>
            <div className="font-light text-slate-500">{description}</div>
          </div>

          <div className="flex justify-between items-end ">
            <div className="font-normal text-slate-700">
              {day < 0 ? "เลยเวลาเช่าแล้ว" : "ระยะเวลา 1-" + day + " วัน"}
            </div>
            <div className="flex flex-col gap-2 items-end">
              {rentalOptions[0] == null ? (
                <div className="font-bold text-slate-600 text-xl">
                  ไม่มีข้อมูลราคา
                </div>
              ) : (
                <div className="flex items-end gap-1">
                  <div className="font-bold text-slate-600 text-3xl">
                    {rentalOptions[0] != null ? rentalOptions[0].priceRate : ""}
                    ฿
                  </div>
                  <div className="text-slate-600 ">
                    /
                    {rentalOptions[0] != null
                      ? rentalOptions[0].type == "Daily"
                        ? "วัน"
                        : rentalOptions[0].type == "Weekly"
                        ? "สัปดาห์"
                        : "เดือน"
                      : ""}
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                <Star rating={rating}></Star>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
export default ProductListCard;
