"use client";

import { useEffect, useState } from "react";

import LocationBox from "../../../components/LocationBox";
import PeriodBox from "../../../components/PeriodBox";
import PictureBox from "../../../components/PictureBox";
import SpecificationBox from "../../../components/SpecificationBox";
import { useRouter } from "next/navigation";
import DescriptionBox from "../../../components/DescriptionBox";
import { useSession } from "next-auth/react";

function From({ productId }: { productId: string }) {
  const { push } = useRouter();
  const [error, setError] = useState(false);
  const router = useRouter();
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
  const [oldImg, setOldImg] = useState<string[]>([]);
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
  //initial fetch
  useEffect(() => {
    if (status === "unauthenticated") push("/auth/sign-in");
    if (status === "authenticated" && session) getProduct();
  }, [session]);
  //get product data
  const getProduct = async () => {
    const query = await fetch(`/api/services/products/${productId}`, {
      method: "GET",
    });
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
    handleInput(response.location, "location");
    setOldImg(response.imageName);
    const checkboxday = document.getElementById(
      "checkboxday checkbox"
    ) as HTMLInputElement;
    const checkboxweek = document.getElementById(
      "checkboxweek checkbox"
    ) as HTMLInputElement;
    const checkboxmonth = document.getElementById(
      "checkboxmonth checkbox"
    ) as HTMLInputElement;
    const inputDay = document.getElementById("dayPrice") as HTMLInputElement;
    const inputWeek = document.getElementById("weekPrice") as HTMLInputElement;
    const inputMonth = document.getElementById(
      "monthPrice"
    ) as HTMLInputElement;
    for (const rentalOption of response.rentalOptions) {
      if (rentalOption.type == "Daily") {
        checkboxday.checked = true;
        inputDay.disabled = false;
        inputDay.classList.remove("cursor-not-allowed");
        handleInput(rentalOption.priceRate, "dayPrice");
      }
      if (rentalOption.type == "Weekly") {
        checkboxweek.checked = true;
        inputWeek.disabled = false;
        inputWeek.classList.remove("cursor-not-allowed");
        handleInput(rentalOption.priceRate, "weekPrice");
      }
      if (rentalOption.type == "Monthly") {
        checkboxmonth.checked = true;
        inputMonth.disabled = false;
        inputMonth.classList.remove("cursor-not-allowed");
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
        (checkboxmonth.checked && formData.monthPrice == "") ||
        formData.location == "" ||
        (fileArray.length == 0 && oldImg.length == 0)
      ) {
        //  if (errorPeriod) errorPeriod.classList.remove("hidden");
        setError(true);
        return;
      }
    }
    // if (errorPeriod) errorPeriod.classList.add("hidden");
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
    //handle picture
    const imagename: string[] = oldImg;
    for (const file of fileArray) {
      const data = new FormData();
      data.append("image", file);
      const query = await fetch(`/api/services/upload`, {
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
    const query = await fetch(`/api/services/products/${productId}`, {
      method: "PUT",
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
    if (response.statusCode == 400) {
      const errorUpdate = document.getElementById("errorUpdate");
      if (errorUpdate) {
        errorUpdate.classList.remove("hidden");
        errorUpdate.classList.add("flex");
      }
    } else {
      push("/my-shop/products");
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
      <PictureBox
        fileArray={fileArray}
        setFileArray={setFileArray}
        oldImg={oldImg}
        setOldImg={setOldImg}
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
      <div className="col-start-1 xl:col-start-2 justify-self-center xl:justify-self-end flex flex-col w-[60%] xl:w-40 h-12 xl:h-16">
        <div
          className="text-red-500 font-bold w-full justify-center hidden"
          id="errorUpdate"
        >
          update ไม่สำเร็จ
        </div>
        {error && (
          <div className="text-red-400 flex col-start-1 items-center justify-center xl:col-start-2 uppercase font-semibold rounded-xl xl:rounded-md w-full ">
            โปรดกรอกข้อมูลให้ครบ
          </div>
        )}
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
            <g fill="none" fillRule="evenodd">
              <g transform="translate(2 1)" stroke="#FFF" strokeWidth="1.5">
                <circle
                  cx="42.601"
                  cy="11.462"
                  r="5"
                  fillOpacity="1"
                  fill="#fff"
                >
                  <animate
                    attributeName="fillOpacity"
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
                  fillOpacity="0"
                  fill="#fff"
                >
                  <animate
                    attributeName="fillOpacity"
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
                  fillOpacity="0"
                  fill="#fff"
                >
                  <animate
                    attributeName="fillOpacity"
                    begin="0s"
                    dur="1.3s"
                    values="0;0;1;0;0;0;0;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="27" cy="49.125" r="5" fillOpacity="0" fill="#fff">
                  <animate
                    attributeName="fillOpacity"
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
                  fillOpacity="0"
                  fill="#fff"
                >
                  <animate
                    attributeName="fillOpacity"
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
                  fillOpacity="0"
                  fill="#fff"
                >
                  <animate
                    attributeName="fillOpacity"
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
                  fillOpacity="0"
                  fill="#fff"
                >
                  <animate
                    attributeName="fillOpacity"
                    begin="0s"
                    dur="1.3s"
                    values="0;0;0;0;0;0;1;0"
                    calcMode="linear"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="27" cy="5" r="5" fillOpacity="0" fill="#fff">
                  <animate
                    attributeName="fillOpacity"
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
