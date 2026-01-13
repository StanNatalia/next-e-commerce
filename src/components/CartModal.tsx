"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import CheckoutModal from "./CheckoutModal";
import { useState } from "react";

const CartModal = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 z-20 flex justify-end"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-80 absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white right-0 top-12 ring-0 flex flex-col gap-6 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        {cartItems.length === 0 ? (
          <div className="">Cart is Empty</div>
        ) : (
          <>
            <h2 className="text-xl">Shopping Cart</h2>
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={72}
                    height={96}
                    className="object-cover rounded-md"
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">{item.name}</h3>
                      <div className="p-1 bg-gray-50 rounded-sm">
                        ${item.price}
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <button
                            className="w-6 h-6 flex items-center justify-center border rounded"
                            onClick={() => decreaseQty(item.id)}
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            className="w-6 h-6 flex items-center justify-center border rounded"
                            onClick={() => increaseQty(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <span
                        className="text-blue-500 cursor-pointer"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between font-semibold">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex text-sm mt-6 justify-end">
                <button
                  className="rounded-md py-3 px-4 bg-black text-white"
                  onClick={() => setShowCheckout(true)}
                >
                  Checkout
                </button>
                {showCheckout && (
                  <CheckoutModal
                    subtotal={subtotal}
                    cartItems={cartItems}
                    onClose={() => setShowCheckout(false)}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
