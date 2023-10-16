import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions, Profile } from "next-auth";

import { API_HOST } from "@/config";

async function fetchProfile(accessToken: string) {
  const res = await fetch(`/api/services/auth/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return (await res.json()) as Profile;
}

async function verifyGoogleAccount(idToken: string) {
  const res = await fetch(`/api/services/auth/google`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
  return res;
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        const res = await fetch(`/api/services/auth/sign-in`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const response = await res.json();
        const accessToken = res.headers.get("Authorization") as string;
        if (res.ok && response) {
          const profile = await fetchProfile(accessToken);
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
    async signIn({ account }) {
      if (account?.provider === "google") {
        console.log(account);
        const response = await verifyGoogleAccount(account.id_token as string);
        return response && response.ok;
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
    async jwt({ token, user, account }) {
      if (account?.provider === "google") {
        const response = await verifyGoogleAccount(account.id_token as string);
        if (response && response.ok) {
          const accessToken = response.headers.get("Authorization");
          const profile = await fetchProfile(accessToken as string);
          return { ...token, ...user, account, accessToken, data: profile };
        }
      }
      return { ...token, ...user, account };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/auth/sign-in",
  },
};
