function TableHeader() {
  return (
    <thead>
      <tr className="w-full h-16 font-bold ">
        <th className="cursor-default text-left w-[60%] border-b-2 border-slate-300"></th>
        <th className="cursor-default text-left border-b-2 border-slate-300">
          Type
        </th>
        <th className="cursor-default text-left border-b-2 border-slate-300">
        Rental period
        </th>
        <th className="cursor-default text-left border-b-2 border-slate-300">
          Price
        </th>
        <th className="cursor-default text-left border-b-2 border-slate-300 w-[5%]"></th>
      </tr>
    </thead>
  );
}
export default TableHeader;
