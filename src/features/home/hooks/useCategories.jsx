"use client";
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useCategories = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`,
    fetcher
  );
  // console.log(data);

  return {
    data,
    error,
    isLoading,
  };
};

export default useCategories;
