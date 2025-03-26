"use client";

import useCartStore from "@/stores/useCartStore";
import React from "react";

const AddToCartBtn = ({product}) => {
  const { addToCart, cart } = useCartStore();
  return (
    <button
      onClick={() => {
        addToCart(product);
      }}
      className="text-white bg-purple-700 cursor-pointer hover:bg-purple-800 inline-flex justify-center items-center font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none active:bg-gray-200 active:text-purple-700 duration-200"
    >
      {cart.some((item) => item.id === product.id) ? "Added" : "Add to Cart"}
    </button>
  );
};

export default AddToCartBtn;
