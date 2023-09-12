import Image from "next/image";

function FindYourParterCard({
  topic,
  description,
}: {
  topic: string;
  description: string;
}) {
  return (
    <div className="grow-[3] cursor-pointer">
      <div className="flex items-center justify-start drop-shadow-lg h-20 bg-white p-3 mr-5 rounded-xl">
        <div>
          <Image
            src="https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
            width={60}
            height={60}
            alt="Picture of the author"
            className="rounded-full"
          />
        </div>
        <div className="flex-col">
          <div className="font-extrabold">{topic}</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}
export default FindYourParterCard;
