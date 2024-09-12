import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request: NextRequest) {
  // const cookieData = cookies().get('token'); // cookies is not a function
  
  // if (!cookieData) {
  //   console.log('Cookie data not found');  
  //   return NextResponse.redirect(new URL('/admin/login', request.url));
  // }

  // const tokenValue = cookieData.value;
  // console.log('Token :', tokenValue);

  // if (tokenValue === process.env.USER_OTP && request.nextUrl.pathname === '/admin/login') {
  //   return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  // }
  console.log('Hello from middlwares')

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
