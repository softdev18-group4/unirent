import Dropdown from "./dropDown";

function SpecificationBox({
  brandName,
  brandValue,
  modelName,
  modelValue,
  summaryStorageName,
  summaryStorageValue,
  avaliableStorageName,
  avaliableStorageValue,
  RAMName,
  RAMValue,
  CPUName,
  CPUValue,
  GPUName,
  GPUValue,
  operatingSystemName,
  operatingSystemValue,
  handleInput,
}: {
  brandName: string;
  brandValue: string;
  modelName: string;
  modelValue: string;
  summaryStorageName: string;
  summaryStorageValue: string;
  avaliableStorageName: string;
  avaliableStorageValue: string;
  RAMName: string;
  RAMValue: string;
  CPUName: string;
  CPUValue: string;
  GPUName: string;
  GPUValue: string;
  operatingSystemName: string;
  operatingSystemValue: string;
  handleInput: (value: any) => void;
}) {
  return (
    <div className="w-full row-start-[17] col-start-1 row-end-[25] col-span-1 xl:row-start-4 xl:col-start-2 xl:row-end-[11] xl:col-span-1">
      <div className="cursor-default font-bold text-xl lg:text-2xl mb-4">
        รายละเอียดสินค้า
      </div>
      <div className="flex flex-col justify-evenly gap-3 bg-white w-full h-full rounded-2xl drop-shadow-2xl p-4 lg:p-8">
        <Dropdown
          name={brandName}
          value={brandValue}
          title="Brand"
          dropdownList={[brandValue, "acer", "del"]}
          handleInput={handleInput}
        ></Dropdown>
        <Dropdown
          name={modelName}
          value={modelValue}
          title="Model"
          dropdownList={[modelValue, "model1", "model2"]}
          handleInput={handleInput}
        ></Dropdown>
        <Dropdown
          name={CPUName}
          value={CPUValue}
          title="Processor"
          dropdownList={[CPUValue, "amd ลายเส้น", "test3"]}
          handleInput={handleInput}
        ></Dropdown>
        <Dropdown
          name={GPUName}
          value={GPUValue}
          title="Graphic Card"
          dropdownList={[GPUValue, "GTX 100", "test3"]}
          handleInput={handleInput}
        ></Dropdown>
        <div className="flex justify-between items-center gap-10">
          <div className="grow flex flex-col">
            <div className="cursor-default font-semibold text-md lg:text-lg text-slate-700">
              Summary Storage
            </div>
            <input
              type="number"
              name={summaryStorageName}
              value={summaryStorageValue}
              onChange={handleInput}
              className="block w-full h-10 p-4 text-sm text-gray-900 border border-slate-400 rounded-xl bg-slate-50 "
              placeholder="Ex. 1000 (GB)"
              required
            ></input>
          </div>
          <div className="grow flex flex-col">
            <div className="cursor-default font-semibold text-md lg:text-lg text-slate-700">
              Avaliable Storage
            </div>
            <input
              type="number"
              name={avaliableStorageName}
              value={avaliableStorageValue}
              onChange={handleInput}
              className="block w-full h-10 p-4 text-sm text-gray-900 border border-slate-400 rounded-xl bg-slate-50 "
              placeholder="Ex. 1000 (GB)"
              required
            ></input>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="cursor-default font-semibold text-md lg:text-lg text-slate-700">
            RAM
          </div>
          <input
            type="number"
            name={RAMName}
            value={RAMValue}
            onChange={handleInput}
            className="block w-full h-10 p-4 text-sm text-gray-900 border border-slate-400 rounded-xl bg-slate-50 "
            placeholder="Ex. 32 (GB)"
            required
          ></input>
        </div>
        <Dropdown
          name={operatingSystemName}
          value={operatingSystemValue}
          title="Operating System"
          dropdownList={[operatingSystemValue, "MacOS", "Linux"]}
          handleInput={handleInput}
        ></Dropdown>
      </div>
    </div>
  );
}
export default SpecificationBox;
