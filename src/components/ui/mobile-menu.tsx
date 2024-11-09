import React, { useState } from "react";
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { UserAccountLink } from "../UserAccountLink/UserAccountLink";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosWoman, IoIosMan } from "react-icons/io";
import { BsHandbagFill } from "react-icons/bs";
import { MdDiscount } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

export const MobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Sheet>
      <SheetTrigger>
        <RxHamburgerMenu className="w-6 h-6" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Nexus Clothing Links</SheetTitle>
          <SheetDescription>Links to clothes categories, user account and shopping cart.</SheetDescription>
        </SheetHeader>

        <div className="flex flex-col space-y-8 mt-12">
          <Switch />
          <div>
            <Link href="/cart/:id" className="text-sm flex space-x-2">
              <FaShoppingCart className="w-5 h-5" />
              <span>My Cart</span>
            </Link>
          </div>
          <div>
            <UserAccountLink iconSize="5" buttonText="My Account" />
          </div>
          <hr className="border-black dark:border-white"></hr>
          <div className="flex flex-row space-x-2">
            <Link href="/women-products" className="text-sm flex space-x-2">
              <IoIosWoman className="w-5 h-5" />
              <span>Women</span>
            </Link>
          </div>
          <div className="mr-1">
            <Link href="/men-products" className="text-sm flex space-x-2">
              <IoIosMan className="w-5 h-5" />
              <span>Men</span>
            </Link>
          </div>
          <div>
            <Link href="/accessories" className="text-sm flex space-x-2">
              <BsHandbagFill className="w-5 h-5" />
              <span>Accessories</span>
            </Link>
          </div>
          <div>
            <Link href="/sales" className="text-sm flex space-x-2">
              <MdDiscount className="w-5 h-5" />
              <span>Sales</span>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}