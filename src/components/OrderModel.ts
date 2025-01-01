// models/OrderModel.ts
import { CartItem } from "./Cart";
import { Product } from "./ProductList";

export interface Order {
  cart: CartItem[];
  totalPrice: number;
  deliveryAddress: string;
  pincode: string;
  paid: boolean;
}

export const calculateTotalPrice = (cart: CartItem[], products: Product[]): number => {
  return cart.reduce((total, item) => {
    const product = products.find((p) => p.id === item.id);
    return total + (product?.pricePerKg || 0) * item.quantity;
  }, 0);
};
