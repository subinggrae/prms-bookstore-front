export interface Order {
  id: number;
  createdAt: string;
  receiver: string;
  contact: string;
  bookTitle: string;
  totalQuantity: number;
  totalPrice: number;
}