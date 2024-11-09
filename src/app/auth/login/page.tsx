import React from "react";
import Link from "next/link";
import { LoginForm } from "@/components/ui/login-form";

const LoginPage: React.FC = () => {
  return (
    <>
      <section className="flex min-h-screen items-start lg:items-center mt-20 md:mt-40 lg:mt-0 justify-center">
        <div className="flex flex-col">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-light text-center mb-12 sm:mb-16 lg:mb-24">Sign In</h1>
          <LoginForm />
          <Link href="/auth/register">
            <p className="text-sm lg:text-md mt-8">Don't have an account?<span className="text-blue-600 hover:text-blue-800 font-semibold"> Sign Up</span></p>
          </Link>
        </div>
      </section>
    </>
  )
}

export default LoginPage
