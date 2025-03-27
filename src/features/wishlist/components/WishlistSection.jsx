import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import React from "react";
import WishlistLists from "./WishlistLists";

const WishlistSection = () => {
  return (
    <>
      <Container>
        <Breadcrumb
          title={"Shopping Cart"}
          links={[{ title: "Wishlist", path: "" }]}
        />
      </Container>
      <section className=" pb-8 antialiased dark:bg-gray-900 md:pb-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Your Wishlist
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className=" w-full flex-none">
              <WishlistLists />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WishlistSection;
