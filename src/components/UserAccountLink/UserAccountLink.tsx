import React from 'react'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Spinner } from '@/components/ui/spinner';
import { MdLogin } from "react-icons/md";
import { FaUser } from "react-icons/fa";

type UserAccountLinkProps = {
  iconSize: string;
  buttonText: string;
}

export const UserAccountLink: React.FC<UserAccountLinkProps> = ({ iconSize, buttonText }) => {
  const { data: session, status } = useSession();
  const userId = session?.user?.id;
  const authPageLink = status === "authenticated" ? `/user/${userId}` : "/api/auth/signin";

  return (
    <>
      <Link href={authPageLink} className="text-sm">
        <button aria-label="My Account Button" className="flex space-x-2">
          {status === "loading" && <Spinner size="small" />}
          {status === "authenticated" && <FaUser className={`w-${iconSize} h-${iconSize} transition-colors duration-200 hover:fill-blue-700/90`} />}
          {status === "unauthenticated" && <MdLogin className={`w-${iconSize} h-${iconSize} transition-colors duration-200 hover:fill-blue-700/90`} />}
          <span>{buttonText}</span>
        </button>
      </Link>
    </>
  )
}
