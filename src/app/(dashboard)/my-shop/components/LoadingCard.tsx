function LoadingCard() {
  return (
    <tr className="cursor-default w-full h-20 bg-white animate-pulse">
      <td className="rounded-l-2xl bg-white">
        <div className="flex items-center justify-center truncate">
          <div className="flex items-center justify-start gap-2 w-[80%] lg:w-[70%] xl:w-[50%]">
            <div>
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
      <td className="bg-white">
        <div className="w-12 lg:w-16 rounded-2xl h-2 bg-slate-200"></div>
      </td>
      <td className="bg-white">
        <div className="w-12 lg:w-16 rounded-2xl h-2 bg-slate-200"></div>
      </td>
      <td className="rounded-r-2xl bg-white">
        <div className="w-12 lg:w-16 rounded-2xl h-2 bg-slate-200"></div>
      </td>
    </tr>
  );
}
export default LoadingCard;
