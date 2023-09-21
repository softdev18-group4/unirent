import Image from "next/image";

function ProductCard({
  imgSrc,
  name,
  status,
  period,
  price,
  date,
  timeleft,
}: {
  imgSrc: string;
  name: string;
  status: string;
  period: string;
  price: string;
  date: string;
  timeleft: string;
}) {
  return (
    <div className="cursor-pointer my-3 w-full rounded-2xl bg-white h-20 flex justify-between items-center py-4 pl-4 pr-24 font-semibold">
      <div className="flex items-center gap-4">
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 5L15.133 17.142C15.0971 17.6466 14.8713 18.1188 14.5011 18.4636C14.1309 18.8083 13.6439 19 13.138 19H4.862C4.35614 19 3.86907 18.8083 3.49889 18.4636C3.1287 18.1188 2.90292 17.6466 2.867 17.142L2 5M7 9V15M11 9V15M12 5V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H7C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V5M1 5H17"
            stroke="#EB4335"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <Image
          src={imgSrc}
          width={60}
          height={60}
          objectFit="none"
          alt="Picture of the author"
          className="hidden lg:flex aspect-square"
        />
        <div>{name}</div>
      </div>

      <div className="-translate-x-12 text-yellow-500">{status}</div>
      <div className="text-slate-400">{period}</div>
      <div>{price}</div>
      <div className="text-slate-400">{date}</div>
      <div>{timeleft}</div>
    </div>
  );
}
export default ProductCard;
