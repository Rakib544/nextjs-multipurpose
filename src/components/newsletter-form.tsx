import { Button } from "./ui/button";

export function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-xl font-extrabold text-foreground">
        Sign up for our newsletter
      </h2>
      <p className="mt-6 text-muted-foreground text-base leading-8">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-full border border-indigo-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-white ring-4 ring-transparent transition placeholder:text-foreground focus:border-indigo-600 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <Button type="submit" size="lg" className="h-full">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
