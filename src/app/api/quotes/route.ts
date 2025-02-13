import { NextResponse } from 'next/server';

const quotes = [
  "The only way to do great work is to love what you do.",
  "Innovation distinguishes between a leader and a follower.",
  "Stay hungry, stay foolish.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The best way to predict the future is to create it.",
  "Life is what happens when you're busy making other plans.",
  "The journey of a thousand miles begins with one step.",
  "Be the change you wish to see in the world.",
  "Everything you can imagine is real."
];

export async function GET() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return NextResponse.json({ quote: quotes[randomIndex] });
}
