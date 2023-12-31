"use client";

import { useState } from "react";

function NewPass() {
  const [formData, setFormData] = useState({
    password: "",
    password2: "",
  });
  const handleInput = (e: any, name?: string) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="flex w-screen h-screen min-h-[30rem] bg-[#F1F6F9]">
      <form
        className="flex flex-col items-center pt-20 justify-start h-full w-full gap-8"
        onSubmit={onSubmit}
      >
        <div className="flex items-center justifiy-center uppercase pr-3 py-3 font-extrabold text-3xl">
          <div className="cursor-default flex">
            <div className="text-[#212a3e]">uni</div>
            <div className="text-[coral]">rent</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="newPass" className="font-bold uppercase">
            new password
          </label>
          <input
            type="text"
            id="newPass"
            name="password"
            onChange={handleInput}
            className="bg-white h-12 w-96 md:w-[30rem] rounded-full p-4"
            required
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="reTypenewPass" className="font-bold uppercase">
            retype password
          </label>
          <input
            type="text"
            id="reTypenewPass"
            name="password2"
            onChange={handleInput}
            className="bg-white h-12 w-96 md:w-[30rem] rounded-full p-4"
            required
          ></input>
        </div>
        <input
          type="submit"
          value="confirm"
          className="transition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer bg-[coral] md:w-[30rem] text-white uppercase font-bold rounded-full w-96  h-12"
        ></input>
      </form>
    </div>
  );
}
export default NewPass;
