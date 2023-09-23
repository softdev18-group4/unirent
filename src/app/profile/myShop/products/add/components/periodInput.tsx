function PeriodInput({
  checkboxtext,
  checkboxid,
  startdateid,
  enddateid,
  pricetext,
  priceid,
}: {
  checkboxtext: string;
  checkboxid: string;
  startdateid: string;
  enddateid: string;
  pricetext: string;
  priceid: string;
}) {
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="flex">
        <input id={checkboxid} type="checkbox"></input>
        <label
          htmlFor={checkboxid}
          className="ml-2 text-md font-bold theme-text-color2"
        >
          {checkboxtext}
        </label>
      </div>
      <div className="w-full justify-evenly flex gap-2">
        <div className="grow flex flex-col">
          <div className="cursor-default font-semibold text-md lg:text-lg text-slate-700">
            เริ่มต้น
          </div>
          <input
            type="date"
            id={startdateid}
            className="block w-full h-12 p-1 text-xs border border-slate-400 rounded bg-slate-50 resize-none"
          ></input>
        </div>
        <div className="grow flex flex-col">
          <div className="cursor-default font-semibold text-md lg:text-lg text-slate-700">
            สิ้นสุด
          </div>
          <input
            type="date"
            id={enddateid}
            className="block w-full h-12 p-1 text-xs border border-slate-400 rounded bg-slate-50 resize-none"
          ></input>
        </div>
        <div className="grow flex flex-col">
          <div className="cursor-default font-semibold text-md lg:text-lg text-slate-700">
            {pricetext}
          </div>
          <input
            type="text"
            id={priceid}
            className="block w-full h-12 p-3 text-sm border border-slate-400 rounded bg-slate-50 resize-none"
          ></input>
        </div>
      </div>
    </div>
  );
}
export default PeriodInput;
