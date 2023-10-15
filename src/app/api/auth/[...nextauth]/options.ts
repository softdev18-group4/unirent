import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions, Profile } from "next-auth";

import { API_URL } from "@/app/config";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(`${API_URL}/auth/sign-in`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const response = await res.json();
        const accessToken = res.headers.get("Authorization");
        if (res.ok && response) {
          const res = await fetch(`${API_URL}/auth/profile`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          const profile = (await res.json()) as Profile; // Update the profile type

          return { ...response, data: profile, accessToken };
        } else {
          return {
            ...response,
            data: null,
            accessToken: null,
          };
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        // verify a user's with google account jwt token
        const res = await fetch(
          `https://oauth2.googleapis.com/tokeninfo?id_token=${account?.idToken}`
        );
        const googleAccount = await res.json();
        if (!res.ok || !googleAccount) {
          return false;
        }

        return (
          profile?.email_verified && profile.email?.endsWith("@kmitl.ac.th")
        );
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/auth/sign-in",
  },
};
