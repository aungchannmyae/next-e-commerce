import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Link from "next/link";
import React from "react";
import OrderSummary from "@/components/OrderSummary";

const OrderConfirmation = () => {
  return (
    <>
      <Container>
        <Breadcrumb
          title={"Shopping Cart"}
          links={[
            { title: "Product Detail", path: "" },
            { title: "Shopping Cart", path: "" },
            { title: "Order Confirmation", path: "" },
          ]}
        />
      </Container>

      <section className=" pb-8 antialiased dark:bg-gray-900 md:pb-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">
            Thanks for your order!
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
            Your order{" "}
            <Link
              href=""
              className="font-medium text-gray-900 dark:text-white hover:underline"
            >
              #7564804
            </Link>{" "}
            will be processed within 24 hours during working days. We will
            notify you by email once your order has been shipped.
          </p>
          <div className=" flex gap-10 justify-between">
            <div className=" flex-grow ">
              <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
                <dl className="sm:flex items-center justify-between gap-4">
                  <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                    Date
                  </dt>
                  <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                    14 May 2024
                  </dd>
                </dl>
                <dl className="sm:flex items-center justify-between gap-4">
                  <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                    Payment Method
                  </dt>
                  <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                    JPMorgan monthly installments
                  </dd>
                </dl>
                <dl className="sm:flex items-center justify-between gap-4">
                  <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                    Name
                  </dt>
                  <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                    Flowbite Studios LLC
                  </dd>
                </dl>
                <dl className="sm:flex items-center justify-between gap-4">
                  <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                    Address
                  </dt>
                  <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                    34 Scott Street, San Francisco, California, USA
                  </dd>
                </dl>
                <dl className="sm:flex items-center justify-between gap-4">
                  <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                    Phone
                  </dt>
                  <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                    +(123) 456 7890
                  </dd>
                </dl>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  href=""
                  className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                >
                  Track your order
                </Link>
                <Link
                  href="/products"
                  className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Return to shopping
                </Link>
              </div>
            </div>
            <div className=" w-4/12 ">
              <OrderSummary />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderConfirmation;
