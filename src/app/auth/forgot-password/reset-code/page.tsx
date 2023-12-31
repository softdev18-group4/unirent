"use client";

import { useCallback, useEffect, useState } from "react";

function ResetCode() {
  const [resetCode, setResetCode] = useState("");
  const resetCodeHandler = useCallback(async () => {
    console.log(resetCode);
    //api here!!!
  }, [resetCode]);
  useEffect(() => {
    const timer = setTimeout(() => {
      resetCodeHandler();
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [resetCodeHandler]);
  return (
    <div className="flex w-screen h-screen min-h-[16rem] bg-[#F1F6F9]">
      <div className="flex flex-col items-center pt-20 justify-start h-full w-full gap-8">
        <div className="font-bold uppercase text-2xl">
          Reset Code is in your email
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="reset" className="font-bold uppercase">
            reset code
          </label>
          <input
            type="text"
            id="reset"
            name="resetCode"
            className="bg-white h-12 w-96 md:w-[30rem] rounded-full p-4"
            value={resetCode}
            onChange={(e) => setResetCode(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
}
export default ResetCode;
