"use client"

import React from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import LightGallery from "lightgallery/react";

const ProductDetailImages = ({product}) => {
  return (
    <div className=" ">
      <LightGallery elementClassNames=" grid grid-cols-2 gap-5">
        {product.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            className=" rounded-lg col-span-1"
            alt=""
          />
        ))}
      </LightGallery>
    </div>
  );
};

export default ProductDetailImages;
