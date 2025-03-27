"use client";
import React, { useState, useEffect, useRef } from "react";
import useSWR, { mutate } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const useProducts = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useProducts;
