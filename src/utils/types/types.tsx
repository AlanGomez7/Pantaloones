export type ProductType = {
  _id: string;
  brand: string;
  category: string;
  description: string;
  image: string[];
  isListed: boolean;
  price: number;
  stock: number;
  title: string;
  uniqueId: string;
}[];


export type productDetailsType =  {
  _id: string;
  brand: string;
  category: string;
  description: string;
  image: string[];
  isListed: boolean;
  price: string;
  stock: string;
  title: string;
  color:string
  uniqueId: string;
  variants: {
    stock: string;
    size: string;
    image: [string];
    color: string;
  }[];
}

export type publicRoutesType = {
  path: string;
  element: JSX.Element;
}[];

export type privateRoutesType = {
  path: string;
  element: JSX.Element;
}[];


export type productSizeType = {
  type: string, 
  sizes: (string|number)[]
}[]