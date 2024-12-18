import { ImageSourcePropType } from "react-native";
import { Category } from "./category";

export type Product = {
  id: string;
  title: string;
  slug: string;
  imagesUrl: ImageSourcePropType[];
  price: number;
  heroImage: ImageSourcePropType;
  category: Omit<Category, "products">;
  maxQuantity: number;
};