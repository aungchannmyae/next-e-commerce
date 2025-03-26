// "use client";
// import useProductStore from "@/stores/useProductStore";
// import { useSearchParams, useRouter } from "next/navigation";
// import React, { useState, useEffect, useRef } from "react";
// import { debounce } from "lodash";
// import useSWR, { mutate } from "swr";

// const useProducts = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const searchRef = useRef();
//   const { selectedCategory } = useProductStore();
//   const [searchParamsString, setSearchParamsString] = useState("");

//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString());
//     if (selectedCategory) {
//       params.set("categoryId", selectedCategory);
//     } else {
//       params.delete("categoryId");
//     }

//     // Update the URL
    
//     router.push(`?${params.toString()}`);
//     setSearchParamsString(params.toString());
//   }, [searchParams, selectedCategory, router]);

//   const handleSearchInput = debounce((e) => {
//     if (e.target.value) {
//       const params = new URLSearchParams(searchParams.toString());
//       params.set("title", e.target.value);
//       router.push(`/?${params.toString()}`);
//       setSearchParamsString(params.toString());
//     } else {
//       const params = new URLSearchParams(searchParams.toString());
//       params.delete("title");
//       router.push(`/?${params.toString()}`);
//       setSearchParamsString(params.toString());
//     }
//   }, 1000);

//   return {
//     searchRef,
//     handleSearchInput,
//     searchParamsString,
//   };
// };

// export default useProducts;
