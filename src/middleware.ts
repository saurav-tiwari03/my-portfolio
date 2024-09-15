import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken'; 

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL;


export function middleware(request: NextRequest) {
  console.log('Hello from middleware');

  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next(); 
    }
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  try {
    const decodedToken:any = jwt.decode(token);

    if (decodedToken?.email === ADMIN_EMAIL) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  } catch (error) {
    console.error('Token decoding failed:', error);
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}

export const config = {
  matcher: '/admin/:path*',
};
