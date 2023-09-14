import { MouseEventHandler } from "react";


export interface ProductState {
  id: number;
  name: string;
  description: string;
  providerId: string;
  provider: string;
  src: string[];
};

export interface InitialState  {
  value: ProductState
}
export interface CustomButtonProps   {
    title: string;
    customBtn?: string;
    containerStyle?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;

}

export interface StarProps {
  rating: number;
}