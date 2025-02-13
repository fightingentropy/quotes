import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function getQuotes(): string[] {
  const quotesFile = path.join(process.cwd(), 'quotes.txt');
  const content = fs.readFileSync(quotesFile, 'utf-8');
  
  // Split the content by double newlines to separate quotes
  return content.split('\n\n')
    .map(quote => quote.trim())
    .filter(quote => quote.length > 0);
}

export async function GET() {
  const quotes = getQuotes();
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return NextResponse.json({ quote: quotes[randomIndex] });
}
