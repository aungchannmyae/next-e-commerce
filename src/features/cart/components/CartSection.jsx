import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
import React from "react";
import CartHeader from "./CartHeader";
import CartLists from "./CartLists";

const CartSection = () => {
  return (
    <>
      <Container>
        <Breadcrumb
          title={"Shopping Cart"}
          links={[
            { title: "Product Detail", path: "" },
            { title: "Shopping Cart", path: "" },
          ]}
        />
      </Container>
      <section className=" pb-8 antialiased dark:bg-gray-900 md:pb-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <CartHeader />

          <div className="mt-6 sm:mt-8 md:gap-6 lg:grid lg:grid-cols-5 lg:items-start xl:gap-8">
            <CartLists />

            <div className=" col-span-2 mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <OrderSummary
                btnName={"Proceed to Checkout"}
                link={"/order-checkout"}
              />

              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="voucher"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Do you have a voucher or gift card?{" "}
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-purple-500 dark:focus:ring-purple-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                  >
                    Apply Code
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartSection;
