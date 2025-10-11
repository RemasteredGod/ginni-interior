import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // Check if request is from sitemap subdomain
  if (hostname.startsWith('sitemap.')) {
    const url = request.nextUrl.clone();

    // Only serve XML files from sitemap subdomain
    if (url.pathname.endsWith('.xml')) {
      // Rewrite to serve the XML file from public folder
      return NextResponse.next();
    }

    // For root path on sitemap subdomain, show index of sitemaps
    if (url.pathname === '/') {
      return NextResponse.rewrite(new URL('/sitemap-index', request.url));
    }

    // Redirect everything else to main domain
    const mainDomain = hostname.replace('sitemap.', '');
    url.hostname = mainDomain;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
