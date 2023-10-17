import { MouseEventHandler } from "react";
import { product } from "@/redux/features/productSlice";
export interface ProductState {
  specifications: {
    brand: string;
    model: string;
    processor: string;
    graphicCard: string;
    ramSize: number;
    storageSize: number;
  };
  availableDays: {
    startDate: string;
    endDate: string;
  };
  id: string;
  name: string;
  description: string;
  ownerId: string;
  availability: boolean;
  rentalOptions: RentalOption[];
  src: string[];
  imageName : string[];
}

export interface RentalOption {
  id: string;
  productId: string;
  type: string; // Daily, Weekly, Monthly
  priceRate: number;
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
  title: string;
  price: number;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  select : boolean;
}

export interface CardDetailProps {
  detail: string;
}

export interface CartItem {
  isSelected: boolean;
  productid: string;
  rentalId: string;
  imgSrc: string;
  location: string;
  name: string;
  description: string;
  type: string;
  period: number;
  price: number;
}
