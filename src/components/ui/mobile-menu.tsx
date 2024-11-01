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
import { RxHamburgerMenu } from "react-icons/rx";

export const MobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Sheet>
      <SheetTrigger>
        <RxHamburgerMenu className="w-6 h-6" onClick={(isMenuOpen) => setIsMenuOpen(!isMenuOpen)} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Nexus Clothing Links</SheetTitle>
          <SheetDescription>Links to clothes categories, user account and shopping cart.</SheetDescription>
        </SheetHeader>

        <div className="flex flex-col space-y-8 mt-12">
          <Switch />
          <Link href="/women-products" className="text-sm">Women</Link>
          <Link href="/men-products" className="text-sm">Men</Link>
          <Link href="/accessories" className="text-sm">Accessories</Link>
          <Link href="/sales" className="text-sm">Sales</Link>
          <hr></hr>
          <Link href="/cart/:id" className="text-sm">My Cart</Link>
          <Link href="/user/:id" className="text-sm">My Account</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}