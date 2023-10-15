function LoadingCard() {
  return (
    <tr className="cursor-default w-full h-20 bg-white animate-pulse">
      <td className="rounded-l-2xl bg-white">
        <div className="flex items-center justify-center truncate">
          <div className="flex items-center justify-start gap-2 w-[80%] lg:w-[70%] xl:w-[50%]">
            <div>
              <div className="w-14 h-14 rounded-md bg-slate-200 hidden lg:flex"></div>
            </div>
            <div className="w-12 lg:w-16 rounded-2xl h-2 bg-slate-200"></div>
          </div>
        </div>
      </td>

      <td className="bg-white">
        <div className="w-12 lg:w-16 rounded-2xl h-2 bg-slate-200"></div>
      </td>
      <td className=" bg-white ">
        <div className="w-12 lg:w-16 rounded-2xl h-2 bg-slate-200"></div>
      </td>
    </tr>
  );
}
export default LoadingCard;
