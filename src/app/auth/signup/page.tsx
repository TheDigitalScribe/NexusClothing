import React from 'react'
import Link from 'next/link';
import { SignUpForm } from '@/components/ui/signup-form';

const SignUpPage: React.FC = () => {
  return (
    <>
      <section className="flex min-h-screen items-start lg:items-center mt-20 md:mt-40 lg:mt-0 justify-center">
        <div className="flex flex-col">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-light text-center mb-12 sm:mb-16 lg:mb-24">Sign Up</h1>
          <SignUpForm />
          <p className="text-sm lg:text-md mt-8">Already have an account?</p>
          <Link href="/auth/login">
            <span className="text-sm text-blue-500 hover:text-blue-800 font-semibold">Login</span>
          </Link>
        </div>
      </section >
    </>
  )
}

export default SignUpPage;