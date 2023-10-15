function FilterBtn({
  nowSearch,
  setSearchBy,
}: {
  nowSearch: string;
  setSearchBy: (keyword: string) => void;
}) {
  const toggleDropdown = () => {
    const filterPopup = document.getElementById("filterPopup");
    if (filterPopup != null) {
      filterPopup.classList.toggle("hidden");
    }
  };

  return (
    <div>
      <div
        onClick={toggleDropdown}
        className="z-30 cursor-pointer w-12 h-12 bg-white drop-shadow-lg rounded-xl flex items-center justify-center hover:bg-slate-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 stroke-[color:var(--theme-color2)]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
          />
        </svg>
      </div>
      {/* popup */}
      <div
        id="filterPopup"
        className="cursor-default z-30 origin-top-right absolute left-10 mt-2 rounded-lg shadow-lg bg-white drop-shadow-lg hidden p-4"
      >
        <div className="h-8 flex justify-center">Search By</div>
        <div className="grid grid-cols-2 gap-2">
          <div
            onClick={() => setSearchBy("name")}
            className={
              nowSearch.includes("name")
                ? "p-4 rounded h-10 drop-shadow-lg bg-slate-200 flex justify-center items-center"
                : "p-4 rounded h-10 drop-shadow-lg bg-white hover:bg-slate-200 flex justify-center items-center"
            }
          >
            Name
          </div>
          <div
            onClick={() => setSearchBy("brand")}
            className={
              nowSearch.includes("brand")
                ? "p-4 rounded h-10 drop-shadow-lg bg-slate-200 flex justify-center items-center"
                : "p-4 rounded h-10 drop-shadow-lg bg-white hover:bg-slate-200 flex justify-center items-center"
            }
          >
            Brand
          </div>
          <div
            onClick={() => setSearchBy("model")}
            className={
              nowSearch.includes("model")
                ? "p-4 rounded h-10 drop-shadow-lg bg-slate-200 flex justify-center items-center"
                : "p-4 rounded h-10 drop-shadow-lg bg-white hover:bg-slate-200 flex justify-center items-center"
            }
          >
            Model
          </div>
          <div
            onClick={() => setSearchBy("processor")}
            className={
              nowSearch.includes("processor")
                ? "p-4 rounded h-10 drop-shadow-lg bg-slate-200 flex justify-center items-center"
                : "p-4 rounded h-10 drop-shadow-lg bg-white hover:bg-slate-200 flex justify-center items-center"
            }
          >
            Processor
          </div>
          <div
            onClick={() => setSearchBy("graphicCard")}
            className={
              nowSearch.includes("graphicCard")
                ? "p-4 rounded h-10 drop-shadow-lg bg-slate-200 flex justify-center items-center"
                : "p-4 rounded h-10 drop-shadow-lg bg-white hover:bg-slate-200 flex justify-center items-center"
            }
          >
            GraphicCard
          </div>
        </div>
      </div>
    </div>
  );
}
export default FilterBtn;
