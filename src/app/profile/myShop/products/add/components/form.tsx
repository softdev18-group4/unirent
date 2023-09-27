"use client";

import { useState } from "react";
import DescriptionBox from "./descriptionBox";
import LocationBox from "./locationBox";
import PeriodBox from "./periodBox";
import PictureBox from "./pictureBox";
import SpecificationBox from "./specificationBox";

function From() {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    summaryStorage: "",
    avaliableStorage: "",
    RAM: "",
    CPU: "core i เจ็บ",
    GPU: "RTX 100000",
    operatingSystem: "Window",
    dayPrice: "",
    dayRange: {
      startDate: null,
      endDate: null,
    },
    weekPrice: "",
    weekRange: {
      startDate: null,
      endDate: null,
    },
    monthPrice: "",
    monthRange: {
      startDate: null,
      endDate: null,
    },
  });

  const handleInput = (e: any, name?: string) => {
    if (name) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: e,
      }));
    } else {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;

      setFormData((prevState) => ({
        ...prevState,
        [fieldName]: fieldValue,
      }));
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    // const data = new FormData();
    // Object.entries(formData).forEach(([key, value]) => {
    //   data.append(key, value);
    // });
    console.log(formData);
  };
  return (
    <form
      className="grid grid-cols-1 xl:grid-cols-2 gap-20"
      onSubmit={onSubmit}
    >
      <DescriptionBox
        productName="productName"
        descriptionName="description"
        productValue={formData.productName}
        descriptionValue={formData.description}
        handleInput={handleInput}
      ></DescriptionBox>
      <PictureBox></PictureBox>
      <SpecificationBox
        summaryStorageName="summaryStorage"
        summaryStorageValue={formData.summaryStorage}
        avaliableStorageName="avaliableStorage"
        avaliableStorageValue={formData.avaliableStorage}
        RAMName="RAM"
        RAMValue={formData.RAM}
        CPUName="CPU"
        CPUValue={formData.CPU}
        GPUName="GPU"
        GPUValue={formData.GPU}
        operatingSystemName="operatingSystem"
        operatingSystemValue={formData.operatingSystem}
        handleInput={handleInput}
      ></SpecificationBox>
      <PeriodBox
        dayPriceName="dayPrice"
        dayPriceValue={formData.dayPrice}
        dayRangeName="dayRange"
        dayRangeValue={formData.dayRange}
        weekPriceName="weekPrice"
        weekPriceValue={formData.weekPrice}
        weekRangeName="weekRange"
        weekRangeValue={formData.weekRange}
        monthPriceName="monthPrice"
        monthPriceValue={formData.monthPrice}
        monthRangeName="monthRange"
        monthRangeValue={formData.monthRange}
        handleInput={handleInput}
      ></PeriodBox>
      <LocationBox></LocationBox>
      <input
        type="submit"
        value="submit"
        className="transition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer col-start-1 justify-self-center xl:col-start-2 xl:justify-self-end bg-[color:var(--theme-color2)] text-white uppercase font-semibold rounded-xl xl:rounded-md w-[60%] xl:w-40 h-8 xl:h-12"
      ></input>
    </form>
  );
}
export default From;
