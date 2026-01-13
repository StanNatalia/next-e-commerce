"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

type SuccessModalProps = {
  onClose: () => void;
};

const SuccessModal = ({ onClose }: SuccessModalProps) => {
  const router = useRouter();
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRedirect = () => {
    onClose();
    router.push("/");
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <Confetti width={windowSize.width} height={windowSize.height} />
      <div className="bg-white relative rounded-xl w-full max-w-4xl h-[90vh] flex flex-col items-center justify-center text-center p-6 md:p-12 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close modal"  className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700 transition">|</button>

        <h1 className="text-5xl md:text-6xl text-green-700 mb-6 md:mb-10">
          Congratulations!
        </h1>
        <h2 className="text-lg md:text-xl font-medium mb-6 md:mb-10">
          Your order has been accepted! Our manager will contact you soon.
        </h2>
        <button
          onClick={handleRedirect}
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Go to homepage
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
