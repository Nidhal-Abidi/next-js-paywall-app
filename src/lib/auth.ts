import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { v4 as uuid } from "uuid";
import db from "./db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { userLoginSchema } from "./schemas/userLogin.schema";
import { encode } from "next-auth/jwt";
import bcrypt from "bcrypt";

const adapter = PrismaAdapter(db);

export const { handlers, auth, signIn } = NextAuth({
  adapter,
  providers: [
    GitHub,
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
    async session({ session, user }) {
      if (user?.id) {
        // Fetch user's subscription from database
        const subscription = await db.subscription.findUnique({
          where: { userId: user.id },
        });

        // Add subscription data to session
        session.user.id = user.id;
        session.user.subscription = subscription || undefined;
      }
      return session;
    },
    async jwt({ token, account }) {
      if (account?.provider === "credentials") {
        token.credentials = true;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  jwt: {
    encode: async function (params) {
      if (params.token?.credentials) {
        const sessionToken = uuid();

        if (!params.token.sub) {
          throw new Error("No user ID found in token");
        }

        const createdSession = await adapter?.createSession?.({
          sessionToken: sessionToken,
          userId: params.token.sub,
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });

        if (!createdSession) {
          throw new Error("Failed to create session");
        }

        return sessionToken;
      }
      return encode(params);
    },
  },
});
