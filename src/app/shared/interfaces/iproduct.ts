import { Icategory } from "./icategory";

 export interface Iproduct   {
  sold: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Icategory;
  brand: Icategory;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}



interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}