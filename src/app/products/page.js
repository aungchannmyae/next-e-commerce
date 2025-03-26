export const metadata = {
  title: 'Products | Next E-commerce',
  description: 'Browse our collection of products - Next E-commerce',
};

import ProductCategory from "@/features/home/components/ProductCategory";
import ProductSection from "@/features/home/components/ProductSection";
import { searchQueryToQueryString } from "@/utils/url";
import React, { Suspense } from "react";



const Page = async ({searchParams}) => {
  const searchParamObject = await searchParams;
  const currentQueryString = searchQueryToQueryString(searchParamObject);
  console.log(searchParamObject)
  console.log(currentQueryString)

  // console.log(currentQueryString)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products${
      currentQueryString ? `?${currentQueryString}` : ""
    }`
  );
  const data = await res.json();
  const productLength = data.length;
  
  return (
    <>
      <ProductCategory productLength={productLength} />
      <ProductSection data={data} />
    </>
  );
};

export default Page;
