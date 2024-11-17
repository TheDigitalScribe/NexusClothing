"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { ClientSafeProvider } from "next-auth/react";

type SignInClientProps = {
  providers: Record<string, ClientSafeProvider> | null;
};

export const SignInClient = ({ providers }: SignInClientProps) => {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value.trim();

    setError(null);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      e.currentTarget.reset();
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await signIn("email", { email, callbackUrl: "/" });

      if (result?.error) {
        setError("An error occurred while signing in. Please try again.");
      } else {
        console.log("Sign-in email sent successfully.");
        e.currentTarget.reset();
      }
    }
    catch (error) {
      setError("An unexpected error occurred. Please try again later.");
      console.log(error);
    }
    finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="flex justify-center mt-20 lg:mt-40">
      <div className="p-6 rounded-lg flex flex-col md:w-1/2 lg:w-1/4">
        <Button className="bg-white border-gray-400 hover:none text-black rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-300" onClick={() => signIn(providers?.google?.id)} aria-label="Sign In With Google Button"><FcGoogle />Sign In With Google</Button>
        <p className="text-center my-8">or</p>
        <form onSubmit={handleEmailSubmit} noValidate>
          <label className="flex flex-col space-y-2 text-sm">
            <span className={`${error ? "text-red-500" : ""}`}>Email address</span>
            <input
              type="email"
              id="email"
              name="email"
              className={`p-2 border bg-gray-200 dark:bg-gray-900 border-gray-400 rounded-lg text-sm ${error ? "border-red-500 focus:outline-none" : ""}`}
              placeholder="Enter your email..."
            />
          </label>

          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

          <Button className="mt-4 w-full" aria-label="Sign In with Email Button" disabled={isSubmitting}><MdEmail />{isSubmitting ? "Submitting..." : "Sign In with Email"}</Button>
        </form>
      </div>
    </section>
  );
};
