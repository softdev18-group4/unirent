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
    imgSrc:
      "https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
    topic: "กำลังปล่อยเช่า...",
    description: "รีบเช่าจะได้ไปทำอย่างอื่นนะ",
  },
  {
    id: 2,
    imgSrc:
      "https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
    topic: "กำลังปล่อยเช่า...",
    description: "รีบเช่าจะได้ไปทำอย่างอื่นนะ",
  },
  {
    id: 3,
    imgSrc:
      "https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
    topic: "กำลังปล่อยเช่า...",
    description: "รีบเช่าจะได้ไปทำอย่างอื่นนะ",
  },
];
//============================================================================================================
function FindYourParter() {
  return (
    <div>
      <div className="flex font-extrabold py-3 justify-between">
        <div className="cursor-default">ค้นหาคู่ค้าของคุณ</div>
        <a className="theme-text-color2" href="#">
          ดูเพิ่มเติม
        </a>
      </div>

      <div className="flex gap-x-5">
        {partnerList.map(({ id, imgSrc, topic, description }) => (
          <FindYourParterCard
            key={id}
            imgSrc={imgSrc}
            topic={topic}
            description={description}
          ></FindYourParterCard>
        ))}

        <div className="cursor-pointer w-10 bg-white drop-shadow-lg rounded-xl flex items-stretch justify-center hover:bg-slate-200">
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
