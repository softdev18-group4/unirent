"use client";
import { useEffect, useState } from "react";
import FindYourParterCard from "./cards/findYourPartnerCard";
//============================================================Data===========================================================================
interface partner {
  id: number;
  imgSrc: string;
  topic: string;
  description: string;
}
export const partnerList: partner[] = [
  {
    id: 1,
    imgSrc: "/product.png",
    topic: "กำลังปล่อยเช่า1...",
    description: "รีบเช่าจะได้ไปทำอย่างอื่นนะ",
  },
  {
    id: 2,
    imgSrc: "/product1.png",
    topic: "กำลังปล่อยเช่า2...",
    description: "รีบเช่าจะได้ไปทำอย่างอื่นนะ",
  },
  {
    id: 3,
    imgSrc: "/product2.png",
    topic: "กำลังปล่อยเช่า3...",
    description: "รีบเช่าจะได้ไปทำอย่างอื่นนะ",
  },
];
//============================================================================================================
function FindYourParter() {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  return (
    <div>
      <div className="flex font-extrabold py-3 justify-between">
        <div className="cursor-default">ค้นหาคู่ค้าของคุณ</div>
        <a className="theme-text-color2" href="#">
          ดูเพิ่มเติม
        </a>
      </div>

      <div className="flex gap-x-5">
        <div className="hidden xl:flex grow gap-x-5">
          {partnerList
            .slice(index3, index3 + 3)
            .map(({ id, imgSrc, topic, description }, index) => (
              <FindYourParterCard
                key={index}
                id={id}
                imgSrc={imgSrc}
                topic={topic}
                description={description}
              ></FindYourParterCard>
            ))}
        </div>
        <div className="hidden xl:hidden md:flex grow gap-x-5">
          {partnerList
            .slice(index2, index2 + 2)
            .map(({ id, imgSrc, topic, description }, index) => (
              <FindYourParterCard
                key={index}
                id={id}
                imgSrc={imgSrc}
                topic={topic}
                description={description}
              ></FindYourParterCard>
            ))}
        </div>
        <div className="md:hidden flex grow gap-x-5">
          {partnerList
            .slice(index1, index1 + 1)
            .map(({ id, imgSrc, topic, description }, index) => (
              <FindYourParterCard
                key={index}
                id={id}
                imgSrc={imgSrc}
                topic={topic}
                description={description}
              ></FindYourParterCard>
            ))}
        </div>
        <div
          onClick={(e) => {
            setIndex1(index1 + 1);
            if (index1 + 1 >= partnerList.length) setIndex1(0);
            setIndex2(index2 + 1);
            if (index2 + 2 >= partnerList.length) setIndex2(0);
            setIndex3(index3 + 1);
            if (index3 + 3 >= partnerList.length) setIndex3(0);
          }}
          className="cursor-pointer w-10 bg-white drop-shadow-lg rounded-xl flex items-stretch justify-center hover:bg-slate-200"
        >
          <div className="h-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 theme-bg-color1 stroke-white stroke-[3px] rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FindYourParter;
