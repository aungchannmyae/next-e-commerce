"use client";
import React, { Suspense, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { debounce } from "lodash";
import { BiCross } from "react-icons/bi";
import { LuArchiveX, LuX } from "react-icons/lu";

const HeaderSearchForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchParams.get("title")) {
      searchRef.current.value = searchParams.get("title");
    } else {
      searchRef.current.value = "";
    }
  }, []);

  const handleSearchInput = debounce((e) => {
    if (e.target.value) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("title", e.target.value);
      router.push(`/products?${params.toString()}`);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("title");
      router.push(`/products?${params.toString()}`);
    }
  }, 500);
  return (
    <form className=" ">
      <div className=" group relative">
        <input
          type="text"
          id="search-navbar"
          className="block max-md:w-28 max-lg:w-52 w-72 p-2 ps-4 text-sm text-gray-900 border-2 border-purple-300 focus:border-purple-500 focus:ring-purple-500 focus:outline-none rounded-lg bg-purple-50  "
          placeholder="Search..."
          ref={searchRef}
          onChange={handleSearchInput}
        />
        {searchParams.get("title") && (
          <button className="absolute inset-y-0 end-0 flex items-center pe-10">
            <LuX
              className=" w-5 h-5 text-purple-500 cursor-pointer "
              onClick={() => {
                searchRef.current.value = "";
                // const params = new URLSearchParams(searchParams.toString());
                // params.delete("title");
                // router.push(`/products?${params.toString()}`);
              }}
            />
          </button>
        )}

        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <svg
            className=" active:scale-125 duration-100 w-4 h-4 text-purple-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default HeaderSearchForm;
