"use client";
import React, { Suspense, useEffect, useRef } from "react";
import Link from "next/link";
import useProducts from "@/features/home/hooks/useProducts";
import { useRouter, useSearchParams } from "next/navigation";
import { debounce } from "lodash";
import { BiCross } from "react-icons/bi";
import { LuArchiveX, LuX } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchParams.get("title")) {
      searchRef.current.value = searchParams.get("title");
    } else {
      searchRef.current.value = "";
    }
  }, []);

  const handleSearchInput = debounce((e) => {
    if (e.target.value) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("title", e.target.value);
      router.push(`/products?${params.toString()}`);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("title");
      router.push(`/products?${params.toString()}`);
    }
  }, 500);

  return (
    <nav className=" max-md:px-5 max-lg:px-5 px-0 bg-white border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        {/* Main Icon on the Left */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-black">
            Next Shop
          </span>
        </Link>

        {/* Search Bar and Dropdown on the Right */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}

          <form className=" ">
            <div className=" group relative">
              <input
                type="text"
                id="search-navbar"
                className="block max-md:w-28 max-lg:w-52 w-72 p-2 ps-4 text-sm text-gray-900 border-2 border-purple-300 focus:border-purple-500 focus:ring-purple-500 focus:outline-none rounded-lg bg-purple-50  "
                placeholder="Search..."
                ref={searchRef}
                onChange={handleSearchInput}
              />
              {searchParams.get("title") && (
                <button className="absolute inset-y-0 end-0 flex items-center pe-10">
                  <LuX
                    className=" w-5 h-5 text-purple-500 cursor-pointer "
                    onClick={() => {
                      searchRef.current.value = "";
                      // const params = new URLSearchParams(searchParams.toString());
                      // params.delete("title");
                      // router.push(`/products?${params.toString()}`);
                    }}
                  />
                </button>
              )}

              <button
                type="submit"
                className="absolute inset-y-0 end-0 flex items-center pe-3"
              >
                <svg
                  className=" active:scale-125 duration-100 w-4 h-4 text-purple-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className={`  hover:scale-105 duration-300 text-sm text-gray-900 border-2 border-purple-300 active:border-purple-500 active:ring-purple-500 focus-visible:border-purple-500 focus-visible:ring-purple-500 focus-visible:ring-1 focus-visible:outline-none bg-purple-50`} variant="outline">Profile</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-purple-50">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Cart</DropdownMenuItem>
                <DropdownMenuItem>Wishlist</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <Dropdown
            label=""
            inline
            placement="bottom-end"
            className=" w-32"
            renderTrigger={() => (
              <button className=" max-md:w-16 max-lg:w-20 w-28 text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm max-md:px-2 px-4 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 active:ring-4 active:ring-purple-200 duration-75">
                Profile
              </button>
            )}
          >
            <Dropdown.Item as={Link} href="/cart">
              Cart
            </Dropdown.Item>
            <Dropdown.Item as={Link} href="/wishlist">
              Wishlists
            </Dropdown.Item>
            <Dropdown.Item as={Link} href="#">
              Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as={Link} href="#">
              Sign out
            </Dropdown.Item>
          </Dropdown> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
