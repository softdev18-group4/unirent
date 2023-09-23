import Dropdown from "./dropDown";

function SpecificationBox() {
  return (
    <div className="w-full row-start-[17] col-start-1 row-end-[25] col-span-1 xl:row-start-4 xl:col-start-2 xl:row-end-[11] xl:col-span-1">
      <div className="cursor-default font-bold text-xl lg:text-2xl mb-4">
        รายละเอียดสินค้า
      </div>
      <div className="flex flex-col justify-evenly gap-3 bg-white w-full h-full rounded-2xl drop-shadow-2xl p-4 lg:p-8">
        <Dropdown
          id="cpu"
          title="CPU"
          dropdownList={["test1", "Test2", "test3"]}
        ></Dropdown>
        <Dropdown
          id="gpu"
          title="GPU"
          dropdownList={["test1", "Test2", "test3"]}
        ></Dropdown>
        <div className="flex justify-between items-center gap-10">
          <div className="grow flex flex-col">
            <div className="cursor-default font-semibold text-md lg:text-lg text-slate-700">
              Summary Storage
            </div>
            <input
              type="text"
              id="summary storage"
              className="block w-full h-10 p-4 text-sm text-gray-900 border border-slate-400 rounded-xl bg-slate-50 "
              placeholder=""
              required
            ></input>
          </div>
          <div className="grow flex flex-col">
            <div className="cursor-default font-semibold text-md lg:text-lg text-slate-700">
              Avaliable Storage
            </div>
            <input
              type="text"
              id="avaliable storage"
              className="block w-full h-10 p-4 text-sm text-gray-900 border border-slate-400 rounded-xl bg-slate-50 "
              placeholder=""
              required
            ></input>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="cursor-default font-semibold text-md lg:text-lg text-slate-700">
            RAM
          </div>
          <input
            type="text"
            id="ram"
            className="block w-full h-10 p-4 text-sm text-gray-900 border border-slate-400 rounded-xl bg-slate-50 "
            placeholder=""
            required
          ></input>
        </div>
        <Dropdown
          id="os"
          title="Operating System"
          dropdownList={["test1", "Test2", "test3"]}
        ></Dropdown>
      </div>

      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
    </div>
  );
}
export default SpecificationBox;
