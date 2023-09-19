import { MouseEventHandler } from "react";
import ProductSelector from "../app/product/detail/[id]/components/ProductSelector";

export interface ProductState {
  _id: object;
  name: string;
  description: string;
  ownerId: object;
  // rental_options : object[];
  specifications: object;
  // reviews : object;
  availability: Boolean;
  availableDays: object;
  src: string[];
}

export interface InitialState {
  value: ProductState;
}
export interface CustomButtonProps {
  title: string;
  customBtn?: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface StarProps {
  rating: number;
}

export interface ProductSelectorProps {
  title : string;
  price :number;
}
