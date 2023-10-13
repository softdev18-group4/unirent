import Image from "next/image";
import Link from "next/link";

function CartCard({
  imgSrc,
  name,
  description,
  type,
  period,
  price,
  productId,
  isSelected,
  handleSelected,
  handleDelete,
}: {
  imgSrc: string;
  name: string;
  description: string;
  period: string;
  price: string;
  type: string;
  productId: string;
  isSelected: boolean;
  handleSelected: (productId: string) => void;
  handleDelete: (productId: string) => void;
}) {
  return (
    //<Link href={"/profile/myShop/products/edit/" + productId}>
    <tr className="cursor-default w-full h-24 lg:h-48 bg-white font-semibold ">
      <td
        className={
          isSelected
            ? "rounded-l-2xl bg-white w-[60%] border-l-2 border-y-2 border-[coral]"
            : "rounded-l-2xl bg-white w-[60%]"
        }
      >
        <div className="flex items-center justify-left w-full break-words">
          <div className="flex items-center gap-6 w-full h-full px-10">
            <div
              className={
                isSelected
                  ? "w-6 h-6 rounded-full border-2 bg-[coral]"
                  : "w-6 h-6 rounded-full border-2"
              }
              onClick={() => handleSelected(productId)}
            ></div>
            <Link
              href={"/product/detail/" + productId}
              className="flex gap-6 items-center w-[60%] break-words"
            >
              <Image
                src={imgSrc}
                width={800}
                height={800}
                objectFit="none"
                alt="Picture of product"
                className=" rounded-md h-10 sm:h-16 lg:h-40 w-[30%]"
              />
              <div className="flex flex-col w-[100%]">
                <div className="font-bold">{name}</div>
                <div className="font-bold text-slate-300 break-words">
                  {description}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </td>

      <td className={isSelected ? "border-y-2 border-[coral]" : ""}>
        <Link
          href={"/product/detail/" + productId}
          className="text-slate-400 text-left bg-white truncate flex items-center justify-start w-full h-24 lg:h-48"
        >
          {type}
        </Link>
      </td>
      <td className={isSelected ? "border-y-2 border-[coral]" : ""}>
        <Link
          href={"/product/detail/" + productId}
          className="text-slate-400 text-left bg-white truncate  flex items-center justify-start w-full h-24 lg:h-48"
        >
          {period}
        </Link>
      </td>
      <td className={isSelected ? "border-y-2 border-[coral]" : ""}>
        <Link
          href={"/product/detail/" + productId}
          className="text-left truncate flex items-center justify-start w-full h-24 lg:h-48"
        >
          {price}
        </Link>
      </td>
      <td
        className={
          isSelected
            ? "rounded-r-2xl bg-white border-r-2 border-y-2 border-[coral]"
            : "rounded-r-2xl bg-white"
        }
      >
        <div onClick={() => handleDelete(productId)}>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M16 5L15.133 17.142C15.0971 17.6466 14.8713 18.1188 14.5011 18.4636C14.1309 18.8083 13.6439 19 13.138 19H4.862C4.35614 19 3.86907 18.8083 3.49889 18.4636C3.1287 18.1188 2.90292 17.6466 2.867 17.142L2 5M7 9V15M11 9V15M12 5V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H7C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V5M1 5H17"
              stroke="#EB4335"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </td>
    </tr>
  );
}
export default CartCard;
