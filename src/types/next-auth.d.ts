import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
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
}
