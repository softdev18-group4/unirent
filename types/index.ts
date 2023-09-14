type ProductState = {
    id: number;
    name: string;
    description: string;
    providerId: string;
    provider: string;
    src: string[];
  };
  
  type InitialState = {
    value: ProductState
  }