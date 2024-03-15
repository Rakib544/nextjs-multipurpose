"use client";

import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex justify-center items-center text-center">
      <FadeIn className="mt-32 max-w-xl">
        <span className="text-6xl font-bold">500</span>
        <h1 className="text-2xl mt-3 mb-2 font-bold text-neutral-950">
          Internal Server Error
        </h1>
        <p className="text-neutral-700">
          Sorry, The server encountered an temporary error and could not
          complete your request. Please try again in 30 seconds.
        </p>
        <Button className="mt-5" onClick={() => reset()}>
          Try again
        </Button>
      </FadeIn>
    </main>
  );
}