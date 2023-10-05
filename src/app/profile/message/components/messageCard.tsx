import Link from "next/link";
import Image from "next/image";
function MessageCard({
  herf,
  name,
  lastMsg,
  imgSrc,
  notificationNumber,
  toggleChat,
}: {
  herf: string;
  name: string;
  lastMsg: string;
  imgSrc: string;
  notificationNumber: Number;
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
          <div className="flex flex-col w-[55%]">
            <p className="font-bold truncate">{name}</p>
            <p className="text-slate-500 truncate">{lastMsg}</p>
          </div>
          <div className="absolute right-3">
            <span className="relative flex w-6 h-6 bg-[color:var(--theme-color2)] text-white rounded-full justify-center items-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--theme-color2)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[color:var(--theme-color2)] justify-center items-center">
                {notificationNumber.toString()}
              </span>
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}
export default MessageCard;
