"use client";

import { useEffect, useState } from "react";
import DescriptionBox from "./descriptionBox";
import LocationBox from "./locationBox";
import PeriodBox from "./periodBox";
import PictureBox from "./pictureBox";
import SpecificationBox from "./specificationBox";
import { useRouter } from "next/navigation";
import { API_HOST } from "@/app/config";
import { useSession } from "next-auth/react";

function From() {
  const { push } = useRouter();
  const [error, setError] = useState(false);
  const { data: session, status } = useSession();
  const token = session?.user.accessToken;
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    brand: "",
    model: "",
    summaryStorage: "",
    avaliableStorage: "",
    RAM: "",
    processor: "",
    graphicCard: "",
    operatingSystem: "Window",
    availableDays: {
      startDate: null,
      endDate: null,
    },
    dayPrice: "",
    weekPrice: "",
    monthPrice: "",
    location: "",
  });
  const [fileArray, setFileArray] = useState<File[]>([]);
  // useEffect(() => {
  //   console.log(fileArray);
  // }, [fileArray]);

  const handleInput = (e: any, name?: string) => {
    if (name) {
      if (e && e.startDate != null && e.endDate != null) {
        e.startDate = new Date(e.startDate);
        e.endDate = new Date(e.endDate);
      }
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

  const onSubmit = async (e: any) => {
    //prevent from refresh when submit
    e.preventDefault();
    //prevent period box cases
    const errorPeriod = document.getElementById("errorPeriod");
    if (
      formData.availableDays.startDate == null ||
      formData.availableDays.endDate == null
    ) {
      if (errorPeriod) errorPeriod.classList.remove("hidden");
      return;
    }

    const checkboxday = document.getElementById(
      "checkboxday checkbox"
    ) as HTMLInputElement;
    const checkboxweek = document.getElementById(
      "checkboxweek checkbox"
    ) as HTMLInputElement;
    const checkboxmonth = document.getElementById(
      "checkboxmonth checkbox"
    ) as HTMLInputElement;
    if (checkboxday && checkboxmonth && checkboxweek) {
      if (
        !(
          checkboxday.checked ||
          checkboxweek.checked ||
          checkboxmonth.checked
        ) ||
        (checkboxday.checked && formData.dayPrice == "") ||
        (checkboxweek.checked && formData.weekPrice == "") ||
        (checkboxmonth.checked && formData.monthPrice == "") ||
        formData.location == "" ||
        fileArray.length == 0
      ) {
        //if (errorPeriod) errorPeriod.classList.remove("hidden");

        setError(true);
        return;
      }
    }
    setError(false);
    // if (errorPeriod) errorPeriod.classList.add("hidden");
    // const data = new FormData();
    // Object.entries(formData).forEach(([key, value]) => {
    //   data.append(key, value);
    // });

    //handle rental opions
    let rentalOptions: any[] = [];
    if (formData.dayPrice != "")
      rentalOptions.push({
        type: "Daily",
        priceRate: Number(formData.dayPrice),
      });
    if (formData.weekPrice != "")
      rentalOptions.push({
        type: "Weekly",
        priceRate: Number(formData.weekPrice),
      });
    if (formData.monthPrice != "")
      rentalOptions.push({
        type: "Monthly",
        priceRate: Number(formData.monthPrice),
      });
    //handle picture
    const imagename: string[] = [];
    for (const file of fileArray) {
      const data = new FormData();
      data.append("image", file);
      const query = await fetch(`${API_HOST}/upload`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
        body: data,
      });
      const response = await query.json();
      // console.log(response);
      imagename.push(response.imageUrl.split("/")[2]);
    }
    const query = await fetch(`${API_HOST}/products`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        name: formData.name,
        description: formData.description,
        imageName: imagename,
        location: formData.location,
        specifications: {
          brand: formData.brand,
          model: formData.model,
          processor: formData.processor,
          os: formData.operatingSystem,
          graphicCard: formData.graphicCard,
          ramSize: Number(formData.RAM),
          storageSize: Number(formData.avaliableStorage),
        },
        availableDays: formData.availableDays,
        rentalOptions: rentalOptions,
      }),
    });
    const response = await query.json();
    console.log(response);

    push("/profile/myShop/products");
  };
  return (
    <form
      className="grid grid-cols-1 xl:grid-cols-2 gap-20"
      onSubmit={onSubmit}
    >
      <DescriptionBox
        productName="name"
        descriptionName="description"
        productValue={formData.name}
        descriptionValue={formData.description}
        handleInput={handleInput}
      ></DescriptionBox>
      <PictureBox
        fileArray={fileArray}
        setFileArray={setFileArray}
      ></PictureBox>
      <SpecificationBox
        brandName="brand"
        brandValue={formData.brand}
        modelName="model"
        modelValue={formData.model}
        summaryStorageName="summaryStorage"
        summaryStorageValue={formData.summaryStorage}
        avaliableStorageName="avaliableStorage"
        avaliableStorageValue={formData.avaliableStorage}
        RAMName="RAM"
        RAMValue={formData.RAM}
        CPUName="processor"
        CPUValue={formData.processor}
        GPUName="graphicCard"
        GPUValue={formData.graphicCard}
        operatingSystemName="operatingSystem"
        operatingSystemValue={formData.operatingSystem}
        handleInput={handleInput}
      ></SpecificationBox>
      <PeriodBox
        availableDaysName="availableDays"
        availableDaysValue={formData.availableDays}
        dayPriceName="dayPrice"
        dayPriceValue={formData.dayPrice}
        weekPriceName="weekPrice"
        weekPriceValue={formData.weekPrice}
        monthPriceName="monthPrice"
        monthPriceValue={formData.monthPrice}
        handleInput={handleInput}
      ></PeriodBox>
      <LocationBox
        address={formData.location}
        handleInput={handleInput}
      ></LocationBox>
      {error && (
        <div className="text-red-400 flex col-start-1 items-center justify-center xl:col-start-2 uppercase font-semibold rounded-xl xl:rounded-md w-full ">
          โปรดกรอกข้อมูลให้ครบ
        </div>
      )}
      <input
        type="submit"
        value="submit"
        className="transition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer col-start-1 justify-self-center xl:col-start-2 xl:justify-self-end bg-[color:var(--theme-color2)] text-white uppercase font-semibold rounded-xl xl:rounded-md w-[60%] xl:w-40 h-8 xl:h-12"
      ></input>
    </form>
  );
}
export default From;
