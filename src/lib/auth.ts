import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import db from "./db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { userLoginSchema } from "./schemas/userLogin.schema";
import bcrypt from "bcrypt";

const adapter = PrismaAdapter(db);

export const { handlers, auth, signIn } = NextAuth({
  adapter,
  session: {
    strategy: "jwt",
  },
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const validatedCredentials = userLoginSchema.parse(credentials);

          const user = await db.user.findFirst({
            where: {
              email: validatedCredentials.email,
            },
          });

          if (!user) {
            return null;
          }

          const isValid = await bcrypt.compare(
            validatedCredentials.password,
            user.password!
          );

          if (!isValid) {
            return null;
          }

          // Strip out hash before returning
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password, ...safeUser } = user;
          return safeUser;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // Redirect to your custom login page
    error: "/login", // Redirect errors to login page with error parameter
  },
  callbacks: {
    async session({ session, token }) {
      // For JWT sessions, user data comes from token
      if (token?.sub) {
        session.user.id = token.sub;

        // Fetch subscription data
        const subscription = await db.subscription.findUnique({
          where: { userId: token.sub },
        });

        session.user.subscription = subscription || undefined;
        session.user.firstName = token.firstName || "";
        session.user.lastName = token.lastName || "";
      }
      return session;
    },
    async jwt({ token, user, account }) {
      // Store user data in token for credentials login
      if (account?.provider === "credentials" && user) {
        token.sub = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
  },
});
