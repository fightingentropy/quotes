function getBaseUrl() {
  if (typeof window !== 'undefined') {
    // Client-side
    return '';  // Use relative URL on client side
  }
  // Server-side
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}

export async function getRandomQuote(): Promise<string> {
  const baseUrl = getBaseUrl();
  const response = await fetch(`${baseUrl}/api/quotes`, { 
    cache: 'no-store',
    headers: {
      'Accept': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch quote');
  }
  const data = await response.json();
  return data.quote;
}

export async function getTotalQuotes(): Promise<number> {
  const baseUrl = getBaseUrl();
  const response = await fetch(`${baseUrl}/api/quotes/count`, {
    headers: {
      'Accept': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch quote count');
  }
  const data = await response.json();
  return data.count;
}
