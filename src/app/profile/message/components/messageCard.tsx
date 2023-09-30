import Link from "next/link";
import Image from "next/image";
function MessageCard({
  herf,
  name,
  lastMsg,
  imgSrc,
  toggleChat,
}: {
  herf: string;
  name: string;
  lastMsg: string;
  imgSrc: string;
  toggleChat: () => void;
}) {
  return (
    <li
      className="p-2 w-full h-20 rounded-lg drop-shadow-lg bg-white hover:bg-slate-200 transition ease-in-out delay-50 duration-200 hover:scale-[1.03]"
      onClick={toggleChat}
    >
      <Link href={herf} className="">
        <div className="flex items-center gap-2">
          <Image
            src={imgSrc}
            width={60}
            height={60}
            alt="Picture of the author"
            className="rounded-full h-[100%] aspect-square"
          />
          <div className="flex flex-col w-[65%]">
            <p className="font-bold truncate">{name}</p>
            <p className="text-slate-500 truncate">{lastMsg}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
export default MessageCard;
