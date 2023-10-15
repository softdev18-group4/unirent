"use client";

import { useRef, useState } from "react";
import Image from "next/image";

function PictureBox() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImages, setSelectedImages] = useState<
    { id: number; url: string }[]
  >([]);
  const [fileArray, setFileArray] = useState<File[]>([]);
  const [nextId, setNextId] = useState(0);

  const handleLabelClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (fileInputRef.current && event.dataTransfer.files.length > 0) {
      const files = Array.from(event.dataTransfer.files);
      const imageUrls = files.map((file) => ({
        id: nextId,
        url: URL.createObjectURL(file),
      }));
      setSelectedImages([...selectedImages, ...imageUrls]);
      setFileArray([...fileArray, ...files]);
      setNextId(nextId + 1);
      fileInputRef.current.files = event.dataTransfer.files;
    }
  };

  const handleFileInputChange = () => {
    if (
      fileInputRef.current &&
      fileInputRef.current.files &&
      fileInputRef.current.files.length > 0
    ) {
      const files = Array.from(fileInputRef.current.files);
      const imageUrls = files.map((file) => ({
        id: nextId,
        url: URL.createObjectURL(file),
      }));
      setSelectedImages([...selectedImages, ...imageUrls]);
      setFileArray([...fileArray, ...files]);
      setNextId(nextId + 1);
    }
  };
  const handleDeleteImage = (id: number) => {
    const updatedImages = selectedImages.filter((image) => image.id !== id);
    setSelectedImages(updatedImages);
    const updatedFileArray = fileArray.filter(
      (file) => fileArray.indexOf(file) !== id
    );
    setFileArray(updatedFileArray);
  };

  return (
    <div className="w-full row-start-1 col-start-1 row-span-4 col-span-1 xl:row-start-1 xl:col-start-2 xl:row-span-3 xl:col-span-1">
      <div className="cursor-default font-bold text-xl lg:text-2xl mb-4">
        รูปสินค้า
      </div>
      <div className="flex gap-3 bg-white w-full h-full rounded-2xl drop-shadow-2xl p-4 lg:p-8">
        <div
          className="border-2 border-slate-500 border-dashed h-full rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100"
          onClick={handleLabelClick}
          onDrop={handleDrop}
          onDragOver={(event) => event.preventDefault()}
        >
          <input
            type="file"
            name="productImage"
            accept="image/*"
            id="imageInput"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileInputChange}
          ></input>
          <label
            // htmlFor="imageInput"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.25 10C20.9185 10 20.6005 10.1317 20.3661 10.3661C20.1317 10.6005 20 10.9185 20 11.25V15.475L18.15 13.625C17.4968 12.9769 16.6139 12.6133 15.6938 12.6133C14.7736 12.6133 13.8907 12.9769 13.2375 13.625L12.3625 14.5125L9.2625 11.4C8.60928 10.7519 7.72641 10.3883 6.80625 10.3883C5.88609 10.3883 5.00322 10.7519 4.35 11.4L2.5 13.2625V6.25C2.5 5.91848 2.6317 5.60054 2.86612 5.36612C3.10054 5.1317 3.41848 5 3.75 5H13.75C14.0815 5 14.3995 4.8683 14.6339 4.63388C14.8683 4.39946 15 4.08152 15 3.75C15 3.41848 14.8683 3.10054 14.6339 2.86612C14.3995 2.6317 14.0815 2.5 13.75 2.5H3.75C2.75544 2.5 1.80161 2.89509 1.09835 3.59835C0.395088 4.30161 0 5.25544 0 6.25V21.525C0.00329382 22.4456 0.370466 23.3276 1.02144 23.9786C1.67242 24.6295 2.55439 24.9967 3.475 25H19.025C19.3637 24.9973 19.7004 24.9468 20.025 24.85C20.7468 24.6475 21.3822 24.2139 21.8338 23.6155C22.2854 23.0171 22.5282 22.2871 22.525 21.5375V11.25C22.525 11.0837 22.4919 10.9191 22.4275 10.7658C22.3631 10.6125 22.2688 10.4736 22.1501 10.3572C22.0314 10.2408 21.8906 10.1492 21.736 10.0879C21.5815 10.0266 21.4162 9.99667 21.25 10ZM3.75 22.5C3.41848 22.5 3.10054 22.3683 2.86612 22.1339C2.6317 21.8995 2.5 21.5815 2.5 21.25V16.7875L6.1125 13.175C6.29519 12.9933 6.54236 12.8914 6.8 12.8914C7.05764 12.8914 7.30481 12.9933 7.4875 13.175L16.825 22.5H3.75ZM20 21.25C19.992 21.492 19.9138 21.7265 19.775 21.925L14.125 16.25L15.0125 15.375C15.1021 15.2835 15.2091 15.2109 15.3271 15.1613C15.4452 15.1117 15.5719 15.0861 15.7 15.0861C15.8281 15.0861 15.9548 15.1117 16.0729 15.1613C16.1909 15.2109 16.2979 15.2835 16.3875 15.375L20 19.0125V21.25ZM23.75 2.5H22.5V1.25C22.5 0.918479 22.3683 0.600537 22.1339 0.366116C21.8995 0.131696 21.5815 0 21.25 0C20.9185 0 20.6005 0.131696 20.3661 0.366116C20.1317 0.600537 20 0.918479 20 1.25V2.5H18.75C18.4185 2.5 18.1005 2.6317 17.8661 2.86612C17.6317 3.10054 17.5 3.41848 17.5 3.75C17.5 4.08152 17.6317 4.39946 17.8661 4.63388C18.1005 4.8683 18.4185 5 18.75 5H20V6.25C20 6.58152 20.1317 6.89946 20.3661 7.13388C20.6005 7.3683 20.9185 7.5 21.25 7.5C21.5815 7.5 21.8995 7.3683 22.1339 7.13388C22.3683 6.89946 22.5 6.58152 22.5 6.25V5H23.75C24.0815 5 24.3995 4.8683 24.6339 4.63388C24.8683 4.39946 25 4.08152 25 3.75C25 3.41848 24.8683 3.10054 24.6339 2.86612C24.3995 2.6317 24.0815 2.5 23.75 2.5Z"
                fill="#394867"
              />
            </svg>
            <div className="uppercase text-sm text-slate-500 text-center p-4">
              drop your image here or
              <div className="theme-text-color2">browse</div>
            </div>
          </label>
        </div>
        <div className="flex flex-wrap w-full gap-2">
          {selectedImages.map((image, index) => (
            <div key={index} className="w-24 h-24 relative">
              <Image
                src={image.url}
                width={400}
                height={400}
                alt={`Selected Image ${index}`}
                className=" aspect-square"
              ></Image>
              <div
                className="absolute top-0 right-0 w-4 h-4 bg-white hover:bg-slate-400 rounded-full cursor-pointer"
                onClick={() => handleDeleteImage(image.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PictureBox;
