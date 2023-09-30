import Image from "next/image";

function FindYourParterCard({
  id,
  imgSrc,
  topic,
  description,
}: {
  id: number;
  imgSrc: string;
  topic: string;
  description: string;
}) {
  return (
    <div className="grow-[3] cursor-pointer items-stretch ">
      <div className="flex gap-4 items-center justify-start drop-shadow-lg h-full bg-white p-3 rounded-xl">
        <div>
          <Image
            src={imgSrc}
            width={60}
            height={60}
            // layout="fill"
            objectFit="none"
            alt="Picture of the author"
            className="rounded-full w-[100%] aspect-square"
          />
        </div>
        <div className="flex flex-col items-stretch">
          <div className="font-extrabold">{topic}</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}
export default FindYourParterCard;
