// types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: string | null;
      lastName: string | null;
      subscription?: {
        id: string;
        planType: string;
        amount: number;
        currency: string;
        createdAt: Date;
        updatedAt: Date;
      };
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    firstName: string | null;
    lastName: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    firstName?: string | null;
    lastName?: string | null;
  }
}
