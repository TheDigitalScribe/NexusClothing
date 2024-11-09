'use client';

import React, { useState } from 'react'
import Link from 'next/link';
import { FaUser } from "react-icons/fa";

type User = {
  id: string;
  email: string;
}

type UserAccountLinkProps = {
  iconSize: string;
  buttonText: string;
}

export const UserAccountLink: React.FC<UserAccountLinkProps> = ({ iconSize, buttonText }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const authPageLink = user ? "/user/:id" : "/auth/login";

  return (
    <>
      <Link href={authPageLink} className="text-sm">
        <button aria-label="My Account Button" className="flex space-x-2">
          <FaUser className={`w-${iconSize} h-${iconSize} transition-colors duration-200 hover:fill-blue-700/90`} />
          <span>{buttonText}</span>
        </button>
      </Link>
    </>
  )
}
