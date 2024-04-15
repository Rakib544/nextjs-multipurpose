"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, Suspense, useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";
import { Input } from "./ui/input";

interface SearchFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

function Search({ className, ...props }: SearchFieldProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const [debouncedValue, setValue] = useDebounceValue<string>("", 300);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!debouncedValue) {
      current.delete("search");
    } else {
      current.set("search", debouncedValue);
      current.set("page", "1");
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);
  return (
    <div className="relative">
      <Input
        className={cn("pl-10", className)}
        {...props}
        onChange={handleChange}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute h-5 w-5 text-gray-500 top-1/2 left-4 -translate-y-1/2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </div>
  );
}

export default function SearchField({ className, ...props }: SearchFieldProps) {
  return (
    <Suspense>
      <Search className={className} {...props} />
    </Suspense>
  );
}
