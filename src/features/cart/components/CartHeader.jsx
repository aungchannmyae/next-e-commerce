"use client";
import React from "react";
import useProducts from "@/features/home/hooks/useProducts";
import useCartStore from "@/stores/useCartStore";

const CartHeader = () => {
  const { cart, removeFromCart, clearCart, addCartQuantity, subCartQuantity } =
    useCartStore();
  const { data, isLoading } = useProducts();
  return (
    <div className=" flex items-center justify-between">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
        Shopping Cart
      </h2>
      {isLoading ? (
        <p>loading...</p>
      ) : cart.length === 0 ? (
        <button
          disabled
          className=" opacity-50 text-white bg-purple-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 "
        >
          Clear All
        </button>
      ) : (
        <button
          onClick={() => {
            clearCart();
          }}
          className=" hover:scale-105 duration-300 active:scale-95 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default CartHeader;
