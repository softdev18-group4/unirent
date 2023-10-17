import Image from "next/image";
import Link from "next/link";

function FindYourParterCard({
  id,
  imgSrc,
  topic,
  description,
}: {
  id: string;
  imgSrc: string;
  topic: string;
  description: string;
}) {
  return (
    <Link
      className="grow-[3] cursor-pointer items-stretch"
      href={`/profile/${id}`}
    >
      <div className="flex gap-4 items-center justify-start drop-shadow-lg h-24 bg-white p-3 rounded-xl">
        <div className="h-full aspect-square">
          <Image
            src={imgSrc}
            width={200}
            height={200}
            // layout="fill"
            alt="Picture of the author"
            className="rounded-full w-[100%]"
          />
        </div>
        <div className="flex flex-col items-stretch">
          <div className="font-extrabold">{topic}</div>
          <div>{description}</div>
        </div>
      </div>
    </Link>
  );
}
export default FindYourParterCard;
