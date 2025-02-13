'use client';

export default function NewQuoteButton() {
  return (
    <button 
      onClick={() => window.location.reload()} 
      className="px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
    >
      New Quote
    </button>
  );
}
