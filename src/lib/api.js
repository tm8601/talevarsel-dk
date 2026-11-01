export function getApiBaseUrl() {
  if (typeof window !== 'undefined') {
    const { protocol, hostname } = window.location;
    if (hostname.endsWith('.ai-beregner.dk')) {
      const apiHost = hostname.replace(/^talevarsel\./, 'talevarsel-api.');
      return `https://${apiHost}`;
    }
    if (hostname.endsWith('.sslip.io')) {
      const apiHost = hostname.replace(/^talevarsel\./, 'talevarsel-api.');
      return `${protocol}//${apiHost}`;
    }
    if (
      hostname === '127.0.0.1' ||
      hostname === 'localhost' ||
      hostname === '192.168.86.30' ||
      hostname === '100.100.55.20' ||
      hostname.startsWith('100.')
    ) {
      return `${protocol}//${hostname}:3030`;
    }
  }
  return process.env.NEXT_PUBLIC_API_URL || 'https://talevarsel-api.ai-beregner.dk';
}
