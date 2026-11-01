import { NextResponse } from 'next/server';

const ALLOWED_PATTERNS = [
  /^https?:\/\/127\.0\.0\.1(:\d+)?$/,
  /^https?:\/\/localhost(:\d+)?$/,
  /^https?:\/\/192\.168\.86\.30(:\d+)?$/,
  /^https?:\/\/100\.100\.55\.20(:\d+)?$/,
  /^https?:\/\/100\.(6[4-9]|[7-9]\d|1[0-1]\d|12[0-7])\.\d+\.\d+(:\d+)?$/,
  /^https?:\/\/.*\.sslip\.io(:\d+)?$/,
  /^https?:\/\/(.*\.)?ai-beregner\.dk(:\d+)?$/,
  /^https?:\/\/(.*\.)?talevarsel\.dk(:\d+)?$/,
];

function getCorsHeaders(request) {
  const origin = request.headers.get('origin') || '';
  const isAllowed = ALLOWED_PATTERNS.some((re) => re.test(origin));
  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Forwarded-For',
    'Access-Control-Allow-Credentials': 'true',
  };
}

export async function OPTIONS(request) {
  return new NextResponse(null, { status: 204, headers: getCorsHeaders(request) });
}

export async function GET(request) {
  return NextResponse.json(
    { status: 'ok', service: 'talevarsel-webshop' },
    { status: 200, headers: getCorsHeaders(request) }
  );
}
