import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      data: null | string;
      message: string;
      accessToken: string;
      iat: number;
      exp: number;
      jti: string;
    };
  }
}