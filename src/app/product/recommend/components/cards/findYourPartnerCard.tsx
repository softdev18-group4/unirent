import Image from "next/image";
import "./styles.css";

function FindYourParterCard({
  imgSrc,
  topic,
  description,
}: {
  imgSrc: string;
  topic: string;
  description: string;
}) {
  return (
    <div className="grow-[3] cursor-pointer items-stretch ">
      <div className="flex items-center justify-start drop-shadow-lg h-full bg-white p-3 rounded-xl">
        <div>
          <Image
            src={imgSrc}
            width={60}
            height={60}
            alt="Picture of the author"
            className="rounded-full profileImg"
          />
        </div>
        <div className="flex-col items-stretch">
          <div className="font-extrabold">{topic}</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}
export default FindYourParterCard;
