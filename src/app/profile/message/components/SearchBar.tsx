function SearchBar({
  inputValue,
  setInputValue,
  placeholder,
}: {
  inputValue: string;
  setInputValue: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div className="w-full mt-2">
      <label className="relative block text-slate-400 focus-within:text-gray-600">
        <input
          type="search"
          id="default-search"
          className="block w-full h-12 p-4 pl-9 text-sm text-black border border-slate-600 rounded-lg bg-white "
          placeholder={placeholder}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          required
        ></input>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </label>
    </div>
  );
}
export default SearchBar;
