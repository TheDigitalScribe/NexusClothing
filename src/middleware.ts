import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const signInUrl = new URL('/auth/signin', req.url);

  if (!token) {
    return NextResponse.redirect(signInUrl);
  }

  const userIdFromToken = token.sub;

  const url = new URL(req.url);
  const userIdFromUrl = url.pathname.split('/')[2];

  if (userIdFromToken !== userIdFromUrl) {
    return NextResponse.redirect(new URL(`/user/${userIdFromToken}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/user/:path*',
};
