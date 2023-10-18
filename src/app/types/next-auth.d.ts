import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      data: null | any;
      message: string;
      accessToken: string;
      iat: number;
      exp: number;
      jti: string;
      name : string;
    };
  }
}
