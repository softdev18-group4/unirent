import PeriodInput from "./periodInput";
import Datepicker from "react-tailwindcss-datepicker";
function PeriodBox({
  availableDaysName,
  availableDaysValue,
  dayPriceName,
  dayPriceValue,
  weekPriceName,
  weekPriceValue,
  monthPriceName,
  monthPriceValue,
  handleInput,
}: {
  availableDaysName: string;
  availableDaysValue: any;
  dayPriceName: string;
  dayPriceValue: string;
  weekPriceName: string;
  weekPriceValue: string;
  monthPriceName: string;
  monthPriceValue: string;
  handleInput: (e: any, name?: string) => void;
}) {
  const handleValueChange = (newValue: any) => {
    handleInput(newValue, availableDaysName);
  };
  return (
    <div className="z-10 w-full row-start-[11] col-start-1 row-span-6 col-span-1 xl:row-start-[7] xl:col-start-1 xl:row-span-6 xl:col-span-1 ">
      <div className="cursor-default font-bold text-xl lg:text-2xl mb-4">
        ระยะเวลาการเช่า
      </div>
      {/* <div className="text-red-600 hidden" id="errorPeriod">
        โปรดเลือกระยะเวลาเช่า และเลือกรูปแบบการเช่า
      </div> */}
      <div className="flex flex-col justify-evenly gap-3 bg-white w-full rounded-2xl drop-shadow-2xl p-4 lg:p-8">
        <div className="flex flex-col">
          <div className="cursor-default font-semibold text-md lg:text-lg text-slate-700">
            ระยะเวลาที่ให้เช่า
          </div>
          <Datepicker
            placeholder={"เลือกระยะเวลา"}
            primaryColor={"amber"}
            value={availableDaysValue}
            inputId={availableDaysName}
            onChange={handleValueChange}
            minDate={new Date()}
            separator={"ถึง"}
            displayFormat={"DD/MM/YYYY"}
            inputClassName="w-full h-12 p-1 text-xs md:text-md border border-slate-400 rounded bg-slate-50 resize-none"
          ></Datepicker>
        </div>
        <PeriodInput
          checkboxtext="รายวัน"
          checkboxid="day checkbox"
          pricetext="ราคา/วัน"
          priceName={dayPriceName}
          priceValue={dayPriceValue}
          handleInput={handleInput}
        ></PeriodInput>
        <PeriodInput
          checkboxtext="รายสัปดาห์"
          checkboxid="week checkbox"
          pricetext="ราคา/สัปดาห์"
          priceName={weekPriceName}
          priceValue={weekPriceValue}
          handleInput={handleInput}
        ></PeriodInput>
        <PeriodInput
          checkboxtext="รายเดือน"
          checkboxid="month checkbox"
          pricetext="ราคา/เดือน"
          priceName={monthPriceName}
          priceValue={monthPriceValue}
          handleInput={handleInput}
        ></PeriodInput>
      </div>
    </div>
  );
}
export default PeriodBox;
