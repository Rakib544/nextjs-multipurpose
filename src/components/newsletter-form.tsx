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
          className="block w-full border text-foreground text-sm placeholder:text-muted-foreground px-4 rounded-full py-4 pl-6 pr-20  ring-4 ring-transparent transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
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
