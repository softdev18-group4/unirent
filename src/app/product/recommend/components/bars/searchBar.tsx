function SearchBar({
  inputValue,
  setInputValue,
}: {
  inputValue: string;
  setInputValue: (value: string) => void;
}) {
  return (
    <div className="grow-[1]">
      <label className="relative text-gray-400 focus-within:text-gray-600 block">
        <input
          type="search"
          id="default-search"
          className="block w-full h-12 p-4 pl-12 text-sm text-gray-900 border drop-shadow-lg rounded-full bg-white "
          placeholder="Search..."
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
          className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
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
