import React from "react";
import Link from "next/link";
import { LoginForm } from "@/components/ui/login-form";

const LoginPage: React.FC = () => {
  return (
    <>
      <section className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col">
          <h2 className="text-2xl lg:text-4xl font-light mb-8 text-center">Sign In</h2>
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
