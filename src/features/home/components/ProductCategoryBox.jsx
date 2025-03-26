"use client";
import React, { useEffect, useState } from "react";
import { LuLayoutGrid } from "react-icons/lu";
import ProductCategoryLoader from "./ProductCategoryLoader";
import useProductStore from "@/stores/useProductStore";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const ProductCategoryBox = ({ data }) => {
  const { selectedCategory, setSelectedCategory } = useProductStore();
  // const [searchParamsString, setSearchParamsString] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryChange = (id) => {
    setSelectedCategory(id);
    if(id){

      const params = new URLSearchParams(searchParams.toString());
      
      params.set("categoryId", id);
      router.push(`/products?${params.toString()}`);
    }else{
      const params = new URLSearchParams(searchParams.toString());
      params.delete("categoryId");
      router.push(`/products?${params.toString()}`);
    }
  };

  return (
    <section className=" flex flex-row flex-wrap gap-5 mb-3 ">
      <div
        onClick={() => categoryChange(null)}
        className=" flex flex-col space-y-5 w-fit p-4 rounded-lg bg-white hover:scale-105 duration-300 active:scale-95 shadow-lg"
      >
        <LuLayoutGrid className=" size-8 text-purple-700" />
        <div className=" flex flex-col gap-0">
          <p className=" text-black text-base font-bold">All</p>
        </div>
      </div>
      {data?.map((category) => (
        <div
          onClick={() => categoryChange(category.id)}
          key={category.id}
          className=" flex flex-col space-y-5 w-fit p-4 rounded-lg bg-white hover:scale-105 duration-300 active:scale-95 shadow-lg"
        >
          <LuLayoutGrid className=" size-8 text-purple-700" />
          <div className=" flex flex-col gap-0">
            <p className=" text-black text-base font-bold capitalize">
              {category.name}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductCategoryBox;
