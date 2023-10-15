"use client";

import { useEffect, useState } from "react";

import LocationBox from "../../../components/locationBox";
import PeriodBox from "../../../components/periodBox";
import PictureBox from "../../../components/pictureBox";
import SpecificationBox from "../../../components/specificationBox";
import { useRouter } from "next/navigation";
import DescriptionBox from "../../../components/descriptionBox";

function From({ productId }: { productId: string }) {
  const { push } = useRouter();
  const router = useRouter();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTA3ZDczMzg4ZDdhYzlkMmFkNzFmYjUiLCJyb2xlIjoidXNlciIsImlhdCI6MTY5Njk1OTQwOCwiZXhwIjoxNjk3MDQ1ODA4fQ.zrkll4H4kIRcmw7cPW0EjGobuYXf7PRCaYe624b9vs0";
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
  const handleInput = (e: any, name?: string) => {
    if (name) {
      if (e.startDate != null && e.endDate != null) {
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
  //initial fetch
  useEffect(() => {
    getProduct();
  }, []);
  //get product data
  const getProduct = async () => {
    const query = await fetch(
      "https://api-unirent.1tpp.dev/products/" + productId,
      {
        method: "GET",
      }
    );
    const response = await query.json();
    //  console.log(response);
    if (response.statusCode == 500) router.back();

    handleInput(response.name, "name");
    handleInput(response.description, "description");
    handleInput(response.specifications.brand, "brand");
    handleInput(response.specifications.model, "model");
    handleInput(response.specifications.processor, "processor");
    handleInput(response.specifications.graphicCard, "graphicCard");
    handleInput(response.specifications.storageSize, "summaryStorage");
    handleInput(response.specifications.ramSize, "RAM");
    handleInput(response.availableDays, "availableDays");
    const checkboxday = document.getElementById(
      "checkboxday checkbox"
    ) as HTMLInputElement;
    const checkboxweek = document.getElementById(
      "checkboxweek checkbox"
    ) as HTMLInputElement;
    const checkboxmonth = document.getElementById(
      "checkboxmonth checkbox"
    ) as HTMLInputElement;
    for (const rentalOption of response.rentalOptions) {
      if (rentalOption.type == "Daily") {
        checkboxday.checked = true;
        handleInput(rentalOption.priceRate, "dayPrice");
      }
      if (rentalOption.type == "Weekly") {
        checkboxweek.checked = true;
        handleInput(rentalOption.priceRate, "weekPrice");
      }
      if (rentalOption.type == "Monthly") {
        checkboxmonth.checked = true;
        handleInput(rentalOption.priceRate, "monthPrice");
      }
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
        (checkboxmonth.checked && formData.monthPrice == "")
      ) {
        if (errorPeriod) errorPeriod.classList.remove("hidden");
        return;
      }
    }
    if (errorPeriod) errorPeriod.classList.add("hidden");
    // const data = new FormData();
    // Object.entries(formData).forEach(([key, value]) => {
    //   data.append(key, value);
    // });

    const updateLoadingSvg = document.getElementById("updateLoadingSvg");
    if (updateLoadingSvg) updateLoadingSvg.classList.remove("hidden");
    let rentalOptions: any[] = [];
    rentalOptions.push({
      type: "Daily",
      priceRate: Number(formData.dayPrice),
      isSelected: formData.dayPrice != "" ? true : false,
    });
    rentalOptions.push({
      type: "Weekly",
      priceRate: Number(formData.weekPrice),
      isSelected: formData.weekPrice != "" ? true : false,
    });
    rentalOptions.push({
      type: "Monthly",
      priceRate: Number(formData.monthPrice),
      isSelected: formData.monthPrice != "" ? true : false,
    });
    const query = await fetch(
      "https://api-unirent.1tpp.dev/products/" + productId,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          name: formData.name,
          description: formData.description,
          location: formData.location,
          specifications: {
            brand: formData.brand,
            model: formData.model,
            processor: formData.processor,
            graphicCard: formData.graphicCard,
            ramSize: Number(formData.RAM),
            storageSize: Number(formData.avaliableStorage),
          },
          availableDays: formData.availableDays,
          rentalOptions: rentalOptions,
        }),
      }
    );
    const response = await query.json();
    // console.log(response);
    if (response.statusCode == 400) {
      const errorUpdate = document.getElementById("errorUpdate");
      if (errorUpdate) {
        errorUpdate.classList.remove("hidden");
        errorUpdate.classList.add("flex");
      }
    } else {
      push("/profile/myShop/products");
    }
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
      <PictureBox></PictureBox>
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
      <LocationBox handleInput={handleInput}></LocationBox>
      <div className="col-start-1 xl:col-start-2 justify-self-center xl:justify-self-end flex flex-col w-[60%] xl:w-40 h-12 xl:h-16">
        <div
          className="text-red-500 font-bold w-full justify-center hidden"
          id="errorUpdate"
        >
          update ไม่สำเร็จ
        </div>
        <div
          onClick={onSubmit}
          className="transition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer bg-[color:var(--theme-color2)] text-white uppercase font-semibold rounded-xl xl:rounded-md xl:w-40 h-8 xl:h-12 flex items-center justify-center gap-3"
        >
          <svg
            width="29"
            height="29"
            viewBox="0 0 58 58"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden"
            id="updateLoadingSvg"
          >
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(2 1)" stroke="#FFF" stroke-width="1.5">
                <circle
                  cx="42.601"
                  cy="11.462"
                  r="5"
                  fill-opacity="1"
                  fill="#fff"
                >
                  <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1.3s"
                    values="1;0;0;0;0;0;0;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="49.063"
                  cy="27.063"
                  r="5"
                  fill-opacity="0"
                  fill="#fff"
                >
                  <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1.3s"
                    values="0;1;0;0;0;0;0;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="42.601"
                  cy="42.663"
                  r="5"
                  fill-opacity="0"
                  fill="#fff"
                >
                  <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1.3s"
                    values="0;0;1;0;0;0;0;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#fff">
                  <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1.3s"
                    values="0;0;0;1;0;0;0;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="11.399"
                  cy="42.663"
                  r="5"
                  fill-opacity="0"
                  fill="#fff"
                >
                  <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1.3s"
                    values="0;0;0;0;1;0;0;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="4.938"
                  cy="27.063"
                  r="5"
                  fill-opacity="0"
                  fill="#fff"
                >
                  <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1.3s"
                    values="0;0;0;0;0;1;0;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="11.399"
                  cy="11.462"
                  r="5"
                  fill-opacity="0"
                  fill="#fff"
                >
                  <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1.3s"
                    values="0;0;0;0;0;0;1;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="27" cy="5" r="5" fill-opacity="0" fill="#fff">
                  <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1.3s"
                    values="0;0;0;0;0;0;0;1"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          </svg>
          Update
        </div>
      </div>
    </form>
  );
}
export default From;
