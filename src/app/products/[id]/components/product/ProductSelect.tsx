"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { reset, updateProduct } from "@/redux/features/productSlice";
import { Star, CustomButton, ProductSelector } from "..";
import { SetStateAction, useEffect, useState } from "react";
import { RentalOption } from "@/types/index";
import { days } from "@/constants";

const ProductSelect = () => {
  const dispatch = useAppDispatch();
  const product =  useAppSelector(
    (state: { productReducer: { value: any } }) => state.productReducer.value
  );
  const [average, setAverage] = useState(0);
  const [count, setCount] = useState(1); // Initial count set to 1
  const [min , setMin] = useState(0)
  const [total , setTotal] = useState(0);
  const [selectedOption, setSelectedOption] = useState(-1);

  const handleOptionChange = (index : number) => {
    setSelectedOption(index);
  };

  
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };


  useEffect(() => {
    const listRental: RentalOption[] = product.rentalOptions;
    if (selectedOption === -1) {
      return;
    }
    let type = listRental[selectedOption].type;
    let min = listRental[selectedOption].priceRate / days[type as keyof typeof days];
    setMin(min)
    setAverage(min);
  }, [product,selectedOption]);

  useEffect(()=>{
    const listRental: RentalOption[] = product.rentalOptions;
    if (selectedOption === -1) {
      return;
    }
    setAverage(min*count)
    setTotal(listRental[selectedOption].priceRate*count)
  },[count, min, product.rentalOptions, selectedOption])
  return (
    <div className="product_select">
      <div className="product_select_title">
        <h1>{product.name}</h1>
        <CustomButton title="เพิ่มไปยังตะกร้า" customBtn="btn_custom1" />
      </div>
      <div className="product_select_tag">
        <p>Macbook</p>
      </div>
      <div className="product_select_review">
        <Star rating={2.9} />
        <p className="product_select_review_count">3 รีวิว</p>
      </div>
      <div className="hr" />
      {product &&
        product.rentalOptions.map((item: any, index: number) => (
          <ProductSelector
            title={item.type}
            price={item.priceRate}
            key={index}
            select={selectedOption === index}
            handleClick={()=>{handleOptionChange(index)}}
          />
        ))}
      <div className="product_select_price">
        <div className="left">
          <p>จำนวนเงินที่ต้องซำระ</p>
        </div>
        <div className="right">
          <p>คิดเป็นเฉลี่ย {Number(average).toFixed(0)}฿/ วัน</p>
          <h6>{total}฿</h6>
        </div>
      </div>
      <div className="product_select_count">
        <CustomButton title="-" handleClick={handleDecrease} />
        <h1>{count}</h1>
        <CustomButton title="+" handleClick={handleIncrease} />
      </div>
      <CustomButton title="เช่า" customBtn="btn_custom2" />
    </div>
  );
};

export default ProductSelect;
