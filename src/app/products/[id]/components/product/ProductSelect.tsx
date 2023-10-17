"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { reset, updateProduct } from "@/redux/features/productSlice";
import { Star, CustomButton, ProductSelector } from "..";
import { useEffect, useState } from "react";
import { RentalOption } from "@/types/index";
import { days } from "@/constants";

const ProductSelect = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(
    (state: { productReducer: { value: any } }) => state.productReducer.value
  );
  const [average, setAverage] = useState(0);
  useEffect(() => {
    const listRental: RentalOption[] = product.rentalOptions;
    let type = listRental[0].type;
    let min = listRental[0].priceRate / days[type as keyof typeof days];
    const lastRental = listRental.map((item) => {
      if (item.priceRate < min) {
        let type = item.type;
        min = item.priceRate / days[type as keyof typeof days];
        return item;
      }
    });
    setAverage(min);
  }, []);
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
        product.rentalOptions.map((item: any, index: any) => (
          <ProductSelector
            title={item.type}
            price={item.priceRate}
            key={index}
          />
        ))}
      <div className="product_select_price">
        <div className="left">
          <p>จำนวนเงินที่ต้องซำระ</p>
        </div>
        <div className="right">
          <p>คิดเป็นเฉลี่ย {Number(average).toFixed(0)}฿/ วัน</p>
          <h6>{900}฿</h6>
        </div>
      </div>
      <div className="product_select_count">
        <CustomButton title="-" />
        <h1>{1}</h1>
        <CustomButton title="+" />
      </div>
      <CustomButton title="เช่า" customBtn="btn_custom2" />
    </div>
  );
};

export default ProductSelect;
