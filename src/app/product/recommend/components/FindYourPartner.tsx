"use client";
import { useEffect, useState } from "react";
import FindYourParterCard from "./cards/FindYourPartnerCard";
import Link from "next/link";
import { API_HOST } from "@/config";
import FindYourPartnerLoadingCard from "./cards/FindYourPartnerLoading";
//============================================================Data===========================================================================
interface partner {
  id: string;
  imgSrc: string;
  topic: string;
  description: string;
}
//============================================================================================================
function FindYourParter() {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [partnerList, setPartnerList] = useState<partner[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const query = await fetch(
      `${API_HOST}/users?skip=0&take=10&orderBy=asc`,
      //`/api/services/users?skip=0&take=10&orderBy=asc`,
      {
        method: "GET",
      }
    );
    const response = await query.json();
    const users: partner[] = [];
    for (const user of response) {
      users.push({
        id: user.id,
        imgSrc: user.profileImage,
        topic: user.firstName + user.lastName,
        description: user.email,
      });
    }
    setPartnerList(users);
    setLoading(false);
    //console.log(users);
  };
  useEffect(() => {});
  return (
    <div>
      <div className="flex font-extrabold py-3 justify-between">
        <div className="cursor-default">ค้นหาคู่ค้าของคุณ</div>
        {/* <Link className="theme-text-color2" href="#">
          ดูเพิ่มเติม
        </Link> */}
      </div>

      <div className="flex gap-x-5">
        <div className="hidden xl:flex grow gap-x-5">
          {loading
            ? [1, 2, 3].map((idx) => (
                <FindYourPartnerLoadingCard
                  key={idx}
                ></FindYourPartnerLoadingCard>
              ))
            : partnerList
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
          {loading
            ? [1, 2].map((idx) => (
                <FindYourPartnerLoadingCard
                  key={idx}
                ></FindYourPartnerLoadingCard>
              ))
            : partnerList
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
          {loading
            ? [1].map((idx) => (
                <FindYourPartnerLoadingCard
                  key={idx}
                ></FindYourPartnerLoadingCard>
              ))
            : partnerList
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
