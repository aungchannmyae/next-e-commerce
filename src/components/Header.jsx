import Link from "next/link";
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
import HeaderSearchForm from "./HeaderSearchForm";
import { Suspense } from "react";

const Header = () => {
  return (
    <nav className=" max-md:px-5 max-lg:px-5 px-0 bg-white border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        {/* Main Icon on the Left */}
        <Link
          href="/products"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-black">
            Next Shop
          </span>
        </Link>

        {/* Search Bar and Dropdown on the Right */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <Suspense>
            <HeaderSearchForm />
          </Suspense>

          {/* Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className={`  active:scale-105 duration-300 text-sm text-gray-900 border-2 border-purple-300 active:border-purple-500 active:ring-purple-500 focus-visible:border-purple-500 focus-visible:ring-purple-500 focus-visible:ring-1 focus-visible:outline-none bg-purple-50`}
                variant="outline"
              >
                Profile
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-purple-50">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href="/cart">Cart</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/wishlist">Cart</Link>
                </DropdownMenuItem>
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
