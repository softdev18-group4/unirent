import PeriodInput from "./periodInput";

function PeriodBox({
  dayPriceName,
  dayPriceValue,
  dayRangeName,
  dayRangeValue,
  weekPriceName,
  weekPriceValue,
  weekRangeName,
  weekRangeValue,
  monthPriceName,
  monthPriceValue,
  monthRangeName,
  monthRangeValue,
  handleInput,
}: {
  dayPriceName: string;
  dayPriceValue: string;
  dayRangeName: string;
  dayRangeValue: any;
  weekPriceName: string;
  weekPriceValue: string;
  weekRangeName: string;
  weekRangeValue: any;
  monthPriceName: string;
  monthPriceValue: string;
  monthRangeName: string;
  monthRangeValue: any;
  handleInput: (e: any, name?: string) => void;
}) {
  return (
    <div className="w-full row-start-[11] col-start-1 row-span-6 col-span-1 xl:row-start-[7] xl:col-start-1 xl:row-span-6 xl:col-span-1">
      <div className="cursor-default font-bold text-xl lg:text-2xl mb-4">
        ระยะเวลาการเช่า
      </div>
      <div className="flex flex-col justify-evenly gap-3 bg-white w-full h-full rounded-2xl drop-shadow-2xl p-4 lg:p-8">
        <PeriodInput
          checkboxtext="รายวัน"
          checkboxid="day checkbox"
          pricetext="ราคา/วัน"
          priceName={dayPriceName}
          priceValue={dayPriceValue}
          RangeName={dayRangeName}
          RangeValue={dayRangeValue}
          handleInput={handleInput}
        ></PeriodInput>
        <PeriodInput
          checkboxtext="รายสัปดาห์"
          checkboxid="week checkbox"
          pricetext="ราคา/สัปดาห์"
          priceName={weekPriceName}
          priceValue={weekPriceValue}
          RangeName={weekRangeName}
          RangeValue={weekRangeValue}
          handleInput={handleInput}
        ></PeriodInput>
        <PeriodInput
          checkboxtext="รายเดือน"
          checkboxid="month checkbox"
          pricetext="ราคา/เดือน"
          priceName={monthPriceName}
          priceValue={monthPriceValue}
          RangeName={monthRangeName}
          RangeValue={monthRangeValue}
          handleInput={handleInput}
        ></PeriodInput>
      </div>
    </div>
  );
}
export default PeriodBox;
