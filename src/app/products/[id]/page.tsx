"use client"

import { useState } from "react";
import { ProductRent, CardSeller, ProductDetail, ProductCharacteristics, ProductReview, AnimatedLoadingBar } from "./components";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { reset, updateProduct } from "@/redux/features/productSlice";
import { imageList } from "@/constants";
import { API_HOST } from "@/config";

const Detail = ({ params }: { params: { id: string } }) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state: { productReducer: { value: any } }) => state.productReducer.value);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    setIsLoading(true);
    dispatch(reset());
    try {
      const res = await fetch(`/api/services/products/${params.id}`);
      const product = await res.json();
      product.src = imageList;
      console.log(product);
      dispatch(updateProduct(product));
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main_container">
      {isLoading ? (
        <AnimatedLoadingBar/>
      ) : (
        <>
          <ProductRent />
          <CardSeller />
          <div className="product_layout">
            <div>
              <ProductDetail />
              <ProductCharacteristics />
            </div>
            <ProductReview />
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
