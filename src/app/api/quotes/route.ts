import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function getQuotes(): string[] {
  const quotesFile = path.join(process.cwd(), 'quotes.txt');
  const content = fs.readFileSync(quotesFile, 'utf-8');
  
  // Split by double newlines and filter empty quotes
  return content.split('\n\n')
    .map(quote => quote.trim())
    .filter(quote => quote.length > 0 && quote !== 'Quotes');  // Filter the title and empty quotes
}

export async function GET() {
  try {
    const quotes = getQuotes();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return NextResponse.json({ quote: quotes[randomIndex] });
  } catch (error) {
    console.error('Error reading quotes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch quote' },
      { status: 500 }
    );
  }
}
