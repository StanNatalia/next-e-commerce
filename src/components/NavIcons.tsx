"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import { useCart } from "@/context/CartContext";
import CheckoutModal from "./CheckoutModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState<{
    subtotal: number;
    cartItems: {
      id: string;
      name: string;
      image: string;
      price: number;
      quantity: number;
    }[];
  } | null>(null);

  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsProfileOpen(false);
    router.push("/login");
    toast.success("You have successfully logged out of your account");
  };

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    setIsProfileOpen((prev) => !prev);
  };

  const { getTotalQuantity } = useCart();

  return (
    <div className=" flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/" className="">
            Profile
          </Link>
          <div className="mt-2 cursor-pointer" onClick={handleLogout}>
            Logout
          </div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex justify-center items-center">
          {getTotalQuantity()}
        </div>
      </div>

      {isCartOpen && (
        <CartModal
          onClose={() => setIsCartOpen(false)}
          onCheckout={(subtotal, cartItems) => {
            setIsCartOpen(false);

            const formattedCartItems = cartItems.map((item) => ({
              id: item._id,
              name: item.name,
              image: item.media?.mainMedia?.image?.url || "",
              price: item.price.price,
              quantity: item.quantity || 1,
            }));

            setCheckoutData({
              subtotal,
              cartItems: formattedCartItems,
            });
            setIsCheckoutOpen(true);
          }}
        />
      )}

      {isCheckoutOpen && checkoutData && (
        <CheckoutModal
          subtotal={checkoutData.subtotal}
          cartItems={checkoutData.cartItems}
          onClose={() => setIsCheckoutOpen(false)}
        />
      )}
    </div>
  );
};

export default NavIcons;
