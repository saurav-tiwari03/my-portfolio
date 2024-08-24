import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const cookieValue = request.cookies.get('access')?.value;
  const currentUrl = new URL(request.url);

  if (cookieValue === 'true' && currentUrl.pathname !== '/admin/dashboard') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  } else if (cookieValue !== 'true' && currentUrl.pathname !== '/admin/login') {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
}
