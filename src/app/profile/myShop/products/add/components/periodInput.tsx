"use client";

import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

function PeriodInput({
  checkboxtext,
  checkboxid,
  pricetext,
  priceName,
  priceValue,
  RangeName,
  RangeValue,
  handleInput,
}: {
  checkboxtext: string;
  checkboxid: string;
  pricetext: string;
  priceName: string;
  priceValue: any;
  RangeName: string;
  RangeValue: any;
  handleInput: (e: any, name?: string) => void;
}) {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const handleValueChange = (newValue: any) => {
    handleInput(newValue, RangeName);
    setValue(newValue);
  };
  const [disable, setdisable] = useState(true);
  const checkboxEvent = () => {
    const checkbox = document.getElementById(checkboxid) as HTMLInputElement;
    const input = document.getElementById(priceName) as HTMLInputElement;
    const range = document.getElementById(RangeName) as HTMLInputElement;
    if (checkbox) {
      if (checkbox.checked) {
        setdisable(false);
        input.disabled = false;
        range.classList.remove("cursor-not-allowed");
        input.classList.remove("cursor-not-allowed");
      } else {
        setdisable(true);
        input.disabled = true;
        input.classList.add("cursor-not-allowed");
        range.classList.add("cursor-not-allowed");
        handleInput("", priceName);
      }
    }
  };
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="flex">
        <input id={checkboxid} onChange={checkboxEvent} type="checkbox"></input>
        <label
          htmlFor={checkboxid}
          className="ml-2 text-md font-bold theme-text-color2"
        >
          {checkboxtext}
        </label>
      </div>
      <div className="w-full justify-evenly flex gap-2">
        <div className="grow flex flex-col">
          <div className="cursor-default font-semibold text-md lg:text-lg text-slate-700">
            ระยะเวลาที่ให้เช่า
          </div>
          <Datepicker
            placeholder={"เลือกระยะเวลา"}
            primaryColor={"amber"}
            value={RangeValue}
            inputId={RangeName}
            onChange={handleValueChange}
            minDate={new Date()}
            separator={"ถึง"}
            disabled={disable}
            displayFormat={"DD/MM/YYYY"}
            inputClassName="cursor-not-allowed w-full h-12 p-1 text-xs md:text-md border border-slate-400 rounded bg-slate-50 resize-none"
          ></Datepicker>
        </div>
        <div className="grow flex flex-col">
          <div className="cursor-default font-semibold text-md lg:text-lg text-slate-700">
            {pricetext}
          </div>
          <input
            type="text"
            id={priceName}
            name={priceName}
            value={priceValue}
            onChange={handleInput}
            className="cursor-not-allowed block w-full h-12 p-3 text-sm border border-slate-400 rounded bg-slate-50 resize-none"
            disabled
          ></input>
        </div>
      </div>
    </div>
  );
}
export default PeriodInput;
