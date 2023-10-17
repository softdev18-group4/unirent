

function ProductCard({
  imgSrc,
  name,
  status,
  period,
  price,
  date,
  timeleft,
  orderId,
  canDelete,
  handleVerify,
}: {
  imgSrc: string;
  name: string;
  status: string;
  period: string;
  price: string;
  date: string;
  timeleft: string;
  canDelete: boolean;
  orderId: string;
  handleVerify: (orderId: string) => void;
}) {
  return (
    //<Link href={"/my-shop/products/edit/" + productId}>
    <tr className="cursor-default w-full h-20 bg-white font-semibold">
      <td className="rounded-l-2xl bg-white">
        <div className="flex items-center justify-left truncate">
          <div className="flex items-center gap-2 w-full ml-[calc(20%)]">
            <div className="flex gap-2 items-center h-[80px] w-full truncate">
              <img
                src={imgSrc}
                width={60}
                height={60}
                alt="Picture of the author"
                className="hidden rounded-md lg:flex aspect-square"
              />
              {name}
            </div>
          </div>
        </div>
      </td>

      <td>
        <div
          className={
            status == "ว่าง" || status == "กำลังดำเนินการ"
              ? "text-yellow-500 text-left bg-white truncate flex items-center justify-start w-full h-[80px]"
              : "text-green-500 text-left bg-white truncate flex items-center justify-start w-full h-[80px]"
          }
        >
          {status}
        </div>
      </td>
      <td>
        <div className="text-slate-400 text-left bg-white truncate  flex items-center justify-start w-full h-[80px]">
          {period}
        </div>
      </td>
      <td>
        <div className="bg-white text-left truncate  flex items-center justify-start w-full h-[80px]">
          {price}
        </div>
      </td>
      <td>
        <div className="text-slate-400 text-left bg-white truncate  flex items-center justify-start w-full h-[80px]">
          {date}
        </div>
      </td>
      <td className="text-left bg-white truncate">
        <div className="text-left bg-white truncate flex items-center justify-start w-full h-[80px]">
          {timeleft}
        </div>
      </td>
      <td className="rounded-r-2xl text-left bg-white truncate">
        <div className="rounded-r-2xl text-left bg-white truncate flex items-center justify-start w-full h-[80px]">
          {status == "กำลังดำเนินการ" ? (
            <div
              onClick={(e) => handleVerify(orderId)}
              className="cursor-pointer p-2 w-fit h-12 rounded-xl flex justify-center items-center bg-slate-400 hover:bg-[coral]"
            >
              ยืนยัน
            </div>
          ) : (
            <div className="text-green-500">ได้รับสินค้าแล้ว</div>
          )}
        </div>
      </td>
    </tr>
  );
}
export default ProductCard;
