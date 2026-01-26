import React from "react";
import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cart, addToCart, decreaseQty, removeFromCart } = useCart();

  const deliveryCharge = cart.length > 0 ? 4 : 0;

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const grandTotal = totalPrice + deliveryCharge;

  if (cart.length === 0) {
    return (
      <div className="pt-40 text-center text-2xl font-semibold">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="pt-40 max-w-[1200px] mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>

      {/* HEADINGS */}
      <div className="grid grid-cols-4 font-semibold text-zinc-600 border-b pb-4 mb-6">
        <span className="col-span-2">Product</span>
        <span className="text-center">Quantity</span>
        <span className="text-right">Price</span>
      </div>

      {/* CART ITEMS */}
      {cart.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-4 items-center border-b py-6"
        >
          {/* PRODUCT */}
          <div className="col-span-2 flex items-center gap-6">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain"
            />

            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm flex items-center gap-2 mt-2 cursor-pointer"
              >
                <FaTrash /> Remove
              </button>
            </div>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-3 py-1 border rounded cursor-pointer"
            >
              −
            </button>

            <span className="font-semibold">{item.quantity}</span>

            <button
              onClick={() => addToCart(item)}
              className="px-3 py-1 border rounded cursor-pointer"
            >
              +
            </button>
          </div>

          {/* PRICE */}
          <div className="text-right font-bold text-orange-500">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      ))}

      {/* CHECKOUT SUMMARY */}
      <div className="mt-10 border rounded-lg p-6 max-w-[400px] ml-auto">
        <h3 className="text-xl font-bold mb-4">Order Summary</h3>

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Delivery Charges</span>
          <span>${deliveryCharge}</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span className="text-orange-500">
            ${grandTotal.toFixed(2)}
          </span>
        </div>

        <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold cursor-pointer">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

