import PeriodInput from "./periodInput";

function PeriodBox() {
  return (
    <div className="w-full row-start-[11] col-start-1 row-span-6 col-span-1 xl:row-start-[7] xl:col-start-1 xl:row-span-6 xl:col-span-1">
      <div className="cursor-default font-bold text-xl lg:text-2xl mb-4">
        ระยะเวลาการเช่า
      </div>
      <div className="flex flex-col justify-evenly gap-3 bg-white w-full h-full rounded-2xl drop-shadow-2xl p-4 lg:p-8">
        <PeriodInput
          checkboxtext="รายวัน"
          checkboxid="day checkbox"
          startdateid="day start"
          enddateid="day end"
          pricetext="ราคา/วัน"
          priceid="day"
        ></PeriodInput>
        <PeriodInput
          checkboxtext="รายสัปดาห์"
          checkboxid="week checkbox"
          startdateid="week start"
          enddateid="week end"
          pricetext="ราคา/สัปดาห์"
          priceid="week"
        ></PeriodInput>
        <PeriodInput
          checkboxtext="รายเดือน"
          checkboxid="month checkbox"
          startdateid="month start"
          enddateid="month end"
          pricetext="ราคา/เดือน"
          priceid="month"
        ></PeriodInput>
      </div>
    </div>
  );
}
export default PeriodBox;
