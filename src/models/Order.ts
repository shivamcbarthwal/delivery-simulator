export interface Order {
  id: string;
  customerId: string;
  basket: { productId: string; quantity: number }[];
}