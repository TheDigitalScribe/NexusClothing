// types/next-auth.d.ts
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
  }

  interface Session {
    accessToken?: string;
    user: {
      id: string;
    } & DefaultSession["user"]
  }

  interface JWT {
    sub?: string;
    accessToken?: string;
  }
}
