export interface Store {
  id: string;
  x: number;
  y: number;
  stock: { productId: string; quantity: number }[];
}