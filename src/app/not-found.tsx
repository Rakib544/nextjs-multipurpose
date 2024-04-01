import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex justify-center items-center text-center">
      <div className="my-32">
        <span className="text-6xl font-black text-indigo-600">404</span>
        <h1 className="text-2xl mt-3 mb-2 font-bold text-neutral-950">
          Page Not Found
        </h1>
        <p className="text-neutral-700">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link href="/" className={buttonVariants({ className: "mt-4" })}>
          Go to home page
        </Link>
      </div>
    </main>
  );
}
