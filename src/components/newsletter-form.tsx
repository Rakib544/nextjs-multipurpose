export function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-lg font-bold text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-neutral-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-full border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex w-full px-6 h-full items-center justify-center rounded-full bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
