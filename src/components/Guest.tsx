'use client';

import Link from 'next/link';

export default function Guest() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to Luno
      </h1>
      <p className="text-lg max-w-lg mb-8">
        A modern social media app to connect, share, and explore. Sign up or log in to join the fun!
      </p>
      <div className="flex gap-4">
      </div>
    </section>
  );
}