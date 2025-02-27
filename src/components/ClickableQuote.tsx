'use client';

import { useState, useEffect } from 'react';

interface ClickableQuoteProps {
  initialQuote: string;
}

export default function ClickableQuote({ initialQuote }: ClickableQuoteProps) {
  const [quote, setQuote] = useState(initialQuote);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNewQuote = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('/api/quotes', { 
        cache: 'no-store',
        headers: {
          'Accept': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error('Failed to fetch new quote:', error);
      setError('Failed to load quote. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch a new quote when the component mounts
  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <>
      <div 
        onClick={fetchNewQuote} 
        className={`fixed top-8 left-1/2 -translate-x-1/2 cursor-pointer transition-all hover:opacity-80 select-none ${
          isLoading ? 'animate-spin' : ''
        }`}
      >
        <svg className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
        </svg>
      </div>
      <div className="-mt-4">
        <blockquote className="text-2xl font-light leading-relaxed text-gray-900 dark:text-gray-100 italic select-none">
          &ldquo;{quote}&rdquo;
        </blockquote>
        {error && (
          <p className="mt-2 text-red-500">{error}</p>
        )}
      </div>
    </>
  );
}
