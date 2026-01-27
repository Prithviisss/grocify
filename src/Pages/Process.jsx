
import React from "react";
import { FaSearch, FaShoppingCart, FaCreditCard, FaTruck } from "react-icons/fa";

const steps = [
  {
    title: "Browse Products",
    desc: "Search and explore fresh groceries easily.",
    icon: <FaSearch />,
  },
  {
    title: "Add to Cart",
    desc: "Add items to your cart or wishlist.",
    icon: <FaShoppingCart />,
  },
  {
    title: "Checkout",
    desc: "Quick and secure checkout process.",
    icon: <FaCreditCard />,
  },
  {
    title: "Fast Delivery",
    desc: "Get your groceries at your doorstep.",
    icon: <FaTruck />,
  },
];

const Process = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-10 py-24">
      <h1 className="text-4xl font-bold text-center mb-16">
        How It <span className="text-orange-500">Works</span>
      </h1>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-3xl">
              {step.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {index + 1}. {step.title}
            </h3>

            <p className="text-zinc-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
