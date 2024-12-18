import { Product } from "./product";

export type OrderStatus = "pending" | "completed" | "Shippped" | "InTransit";

export type Order = {
  id: string;
  slug: string;
  item: string;
  details: string;
  status: OrderStatus;
  date: string;
  items: Product[];
};
