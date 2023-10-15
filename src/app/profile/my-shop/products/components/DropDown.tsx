function Dropdown({
  name,
  value,
  title,
  dropdownList,
  handleInput,
}: {
  name: string;
  value: string;
  title: string;
  dropdownList: string[];
  handleInput: (value: any) => void;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block cursor-default font-semibold text-md lg:text-lg text-slate-700"
      >
        {title}
      </label>
      <select
        id={name}
        name={name}
        onChange={handleInput}
        value={value}
        //className="cursor-pointer w-full h-10 p-4 text-sm text-gray-900 border border-slate-400 rounded-xl bg-slate-50 hover:bg-slate-100"
        className="cursor-pointer bg-slate-50 hover:bg-slate-100 border border-slate-400 text-gray-900 text-sm rounded-xl block w-full p-2.5 "
      >
        {dropdownList.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Dropdown;
