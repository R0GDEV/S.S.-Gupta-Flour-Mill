import React from "react";
import { items } from "../assets/companyData";

interface CartProps {
  cart: { id: number; quantity: number }[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onClose: () => void;
  total: number;
  deliveryCharge: number;
  deliveryAddress: string;
  setDeliveryAddress: (address: string) => void;
  pincode: string;
  setPincode: (pincode: string) => void;
  onPayNow: () => void;
  onPayLater: () => void;
  error: string;
}

const Cart: React.FC<CartProps> = ({
  cart,
  onUpdateQuantity,
  onClose,
  total,
  deliveryCharge,
  deliveryAddress,
  setDeliveryAddress,
  pincode,
  setPincode,
  onPayNow,
  onPayLater,
  error,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cart.length > 0 ? (
          <>
            <ul className="space-y-4">
              {cart.map((item) => {
                const product = items.find((p) => p.id === item.id);
                return (
                  <li key={item.id} className="flex justify-between items-center p-4 border-b">
                    <div>
                      <h3 className="font-semibold">{product?.title}</h3>
                      <p>₹{product?.pricePerKg} per Kg</p>
                    </div>
                    <div className="flex items-center">
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <p>₹{(product?.pricePerKg || 0) * item.quantity}</p>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4">
              <p>Total: ₹{total}</p>
              <p>Delivery Charge: ₹{deliveryCharge}</p>
              <input
                type="text"
                placeholder="Delivery Address"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              {error && <p className="text-red-500">{error}</p>}
              <button onClick={onPayNow}>Pay Now</button>
              <button onClick={onPayLater}>Pay Later</button>
            </div>
          </>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
