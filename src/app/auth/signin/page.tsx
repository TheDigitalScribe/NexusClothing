import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SignInClient } from "./SignInClient";

const SignInPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers = await getProviders();

  return (
    <>
      <SignInClient providers={providers} />
    </>

  )
}

export default SignInPage;