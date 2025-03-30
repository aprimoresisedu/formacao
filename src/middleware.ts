// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const randomRoute = Math.random() < 0.5 ? '/v2' : '/v1';
  // const randomRoute = '/p4';

  // Verifique se está na rota inicial para redirecionamento 
  console.log('aqui 1')
  if (url.pathname === '/') {
    console.log('aqui 2')
    url.pathname = randomRoute;
    // url.searchParams.set('utm_source', randomRoute.replace('/', `FacebookAds-`))

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/', // Aplica apenas para a rota inicial
};
