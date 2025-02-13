function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  // Server-side
  return process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000';
}

export async function getRandomQuote(): Promise<string> {
  const baseUrl = getBaseUrl();
  const response = await fetch(`${baseUrl}/api/quotes`, { cache: 'no-store' });
  const data = await response.json();
  return data.quote;
}

export async function getTotalQuotes(): Promise<number> {
  const baseUrl = getBaseUrl();
  const response = await fetch(`${baseUrl}/api/quotes/count`);
  const data = await response.json();
  return data.count;
}
