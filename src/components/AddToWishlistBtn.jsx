"use client"

import useWishlistStore from "@/stores/useWishlistStore";
import React from "react";

const AddToWishlistBtn = ({product}) => {
    const { addToWishlist, wishlist } = useWishlistStore();
  return (
    <button
      onClick={() => {
        addToWishlist(product)
      }}
      className="text-purple-700 cursor-pointer border border-purple-700 hover:border-purple-800 active:bg-purple-800 active:text-white focus:ring-0 focus:outline-none inline-flex justify-center items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200 "
    >
      {wishlist.some((item) => item.id === product.id) ? "Added" : "Add to Wishlist"}
    </button>
  );
};

export default AddToWishlistBtn;
