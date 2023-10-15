"use client";

import { useState } from "react";

function PeriodInput({
  checkboxtext,
  checkboxid,
  pricetext,
  priceName,
  priceValue,
  handleInput,
}: {
  checkboxtext: string;
  checkboxid: string;
  pricetext: string;
  priceName: string;
  priceValue: any;
  handleInput: (e: any, name?: string) => void;
}) {
  const [disable, setdisable] = useState(true);
  const checkboxEvent = () => {
    const checkbox = document.getElementById(
      "checkbox" + checkboxid
    ) as HTMLInputElement;
    const input = document.getElementById(priceName) as HTMLInputElement;
    if (checkbox) {
      if (checkbox.checked) {
        setdisable(false);
        input.disabled = false;
        input.classList.remove("cursor-not-allowed");
      } else {
        setdisable(true);
        input.disabled = true;
        input.classList.add("cursor-not-allowed");
        handleInput("", priceName);
      }
    }
  };
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="flex">
        <input
          id={"checkbox" + checkboxid}
          onChange={checkboxEvent}
          type="checkbox"
        ></input>
        <label
          htmlFor={"checkbox" + checkboxid}
          className="ml-2 text-md font-bold theme-text-color2"
        >
          {checkboxtext}
        </label>
      </div>
      <div className="w-full justify-evenly flex gap-2">
        <div className="grow flex flex-col">
          <div className="cursor-default font-semibold text-md lg:text-lg text-slate-700">
            {pricetext}
          </div>
          <input
            type="number"
            id={priceName}
            name={priceName}
            value={priceValue}
            onChange={handleInput}
            className="cursor-not-allowed block w-full h-12 p-3 text-sm border border-slate-400 rounded bg-slate-50 resize-none"
            min="0"
            disabled
          ></input>
        </div>
      </div>
    </div>
  );
}
export default PeriodInput;
