import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import React from "react";
import { BiSolidCategory } from "react-icons/bi";

import Link from "next/link";
import ProductDetailImages from "./ProductDetailImages";
import AddToWishlistBtn from "@/components/AddToWishlistBtn";
import AddToCartBtn from "@/components/AddToCartBtn";

const ProductDetail = ({ product }) => {
  return (
    <>
      <Container>
        <Breadcrumb
          title={"Product Detail"}
          links={[{ title: "Product Detail", path: "" }]}
        />
        <section className=" mt-5 grid grid-cols-2 gap-10">
          <div className=" col-span-1 ">
            <ProductDetailImages product={product} />
          </div>
          <div className=" col-span-1 flex flex-col space-y-4 text-black">
            <h1 className=" text-black text-sm capitalize font-semibold flex items-center gap-1">
              <BiSolidCategory className=" size-4 text-red-600" />
              {product.category.name}
            </h1>
            <h4 className=" text-black font-bold text-4xl">{product.title}</h4>
            <span className=" text-purple-700 font-semibold text-2xl">
              $ {product.price}
            </span>
            <p className=" text-black font-medium text-base text-balance">
              {product.description}
            </p>
            {/* <button>Add to my wishlist</button> */}
            <AddToWishlistBtn product={product} />

            {/* <button>Add to cart</button> */}
            <AddToCartBtn product={product} />
          </div>
        </section>
      </Container>
    </>
  );
};

export default ProductDetail;
