import { getRandomQuote } from '@/lib/quotes';
import ClickableQuote from '@/components/ClickableQuote';
import Image from 'next/image';

export const revalidate = 0;

export default async function Home() {
  const quote = await getRandomQuote();

  return (
    <main className="min-h-screen flex items-start pt-[40vh] justify-center relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/quotes_background.jpg"
          alt="Scenic background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="max-w-3xl mx-auto text-center px-4">
        <ClickableQuote initialQuote={quote} />
      </div>
    </main>
  );
}
