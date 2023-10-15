"use client"

import Image from "next/image";
import { ProductRent, CardSeller , ProductDetail ,ProductCharacteristics ,ProductReview} from "./components";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { reset, updateProduct } from "@/redux/features/productSlice";
import {imageList} from "@/constants"
import { API_URL } from "@/app/config";

const Detail = ({ params }: { params: { id: string } }) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productReducer.value);

  useEffect(() => {
    getProduct();
  },[]);
  
  const getProduct = async () => {
    const res = await fetch(
      `${API_URL}/products/${params.id}`
    );
    const product = await res.json();
    product.src = imageList
    console.log(product);
    
    dispatch(updateProduct(product));
  };
  return (
    <div className="main_container">
      <ProductRent />
      <CardSeller />
      <div className="product_layout">
        <div>
      <ProductDetail />
      <ProductCharacteristics />
        </div>
      <ProductReview />
      </div>
      
    </div>
  );
};

export default Detail;
