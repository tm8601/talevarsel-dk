import { NextResponse } from 'next/server';

const ALLOWED_ORIGINS = new Set([
  'https://talevarsel.ai-beregner.dk',
  'http://talevarsel.100.100.55.20.sslip.io',
  'http://talevarsel.192.168.86.30.sslip.io',
  'http://talevarsel.127.0.0.1.sslip.io',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
]);

function getCorsHeaders(request) {
  const origin = request.headers.get('origin') || '';
  const allowOrigin = ALLOWED_ORIGINS.has(origin)
    ? origin
    : 'https://talevarsel.ai-beregner.dk';

  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Forwarded-For',
    'Access-Control-Allow-Credentials': 'true',
    'Vary': 'Origin',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
  };
}

export async function OPTIONS(request) {
  const origin = request.headers.get('origin') || '';
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return new NextResponse(null, { status: 403 });
  }
  return new NextResponse(null, { status: 204, headers: getCorsHeaders(request) });
}

export async function GET(request) {
  return NextResponse.json(
    { status: 'ok', service: 'talevarsel-webshop' },
    { status: 200, headers: getCorsHeaders(request) }
  );
}
