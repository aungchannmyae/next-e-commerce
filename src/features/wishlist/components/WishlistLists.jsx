"use client";
import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import useWishlistStore from "@/stores/useWishlistStore";
import useProducts from "@/features/home/hooks/useProducts";
import Link from "next/link";

const WishlistLists = () => {
  const { wishlist, removeFromWishlist } = useWishlistStore();
  const { data, isLoading } = useProducts();
  return (
    <div className="space-y-6">
      {isLoading ? (
        <p>loading...</p>
      ) : wishlist.length === 0 ? (
        
        <div className=" my-5 w-full flex justify-center items-center font-semibold text-xl text-gray-900">
        <span className=" flex-col justify-center items-center">
          <p className=" f">There is No Item In your Wishlist.</p>
          <Link
            href="/products"
            className=" my-2 flex justify-center text-sm text-purple-500 hover:no-underline underline"
          >
            Explore the Products
          </Link>
        </span>
      </div>
      ) : (
        wishlist?.map((item) => {
          const productExist = data?.find((product) => product.id === item.id);

          if (!productExist) {
            removeFromWishlist(item.id);
            return toast.error("Product Not Found");
          }
          return (
            <div
              key={item.id}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
            >
              <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <div className="shrink-0 md:order-1">
                  {/* <img
                          className="h-20 w-20 dark:hidden"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                          alt="imac image"
                        />
                        <img
                          className="hidden h-20 w-20 dark:block"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                          alt="imac image"
                        /> */}

                  <img src={item.images[0]} className=" w-20 h-20" alt="" />
                </div>

                <label htmlFor="counter-input" className="sr-only">
                  Choose quantity:
                </label>
                <div className="flex items-center justify-between md:order-3 md:justify-between">
                  <div className=" inline-flex justify-center md:w-32">
                    <p className="text-base font-bold text-gray-900 dark:text-white">
                      $ {item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      removeFromWishlist(item.id);
                    }}
                    type="button"
                    className="inline-flex justify-center items-center rounded-md duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:hover:bg-gray-600 text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                  >
                    <svg
                      className=" h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-2xl">
                  <h1 className=" text-black text-sm capitalize font-semibold flex items-center gap-1">
                    <BiSolidCategory className=" size-4 text-red-600" />
                    {item.category.name}
                  </h1>
                  <Link
                    href={`/products/${item.slug}`}
                    className=" line-clamp-2 text-base font-medium text-gray-900 hover:underline dark:text-white"
                  >
                    {item.description}
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default WishlistLists;
