// import * as React from "react";

// import { ButtonProps, buttonVariants } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
//   <nav
//     role="navigation"
//     aria-label="pagination"
//     className={cn("mx-auto flex w-full justify-center", className)}
//     {...props}
//   />
// );
// Pagination.displayName = "Pagination";

// const PaginationContent = React.forwardRef<
//   HTMLUListElement,
//   React.ComponentProps<"ul">
// >(({ className, ...props }, ref) => (
//   <ul
//     ref={ref}
//     className={cn("flex flex-row items-center gap-1", className)}
//     {...props}
//   />
// ));
// PaginationContent.displayName = "PaginationContent";

// const PaginationItem = React.forwardRef<
//   HTMLLIElement,
//   React.ComponentProps<"li">
// >(({ className, ...props }, ref) => (
//   <li ref={ref} className={cn("", className)} {...props} />
// ));
// PaginationItem.displayName = "PaginationItem";

// type PaginationLinkProps = {
//   isActive?: boolean;
// } & Pick<ButtonProps, "size"> &
//   React.ComponentProps<"a">;

// const PaginationLink = ({
//   className,
//   isActive,
//   size = "icon",
//   ...props
// }: PaginationLinkProps) => (
//   <a
//     aria-current={isActive ? "page" : undefined}
//     className={cn(
//       buttonVariants({
//         variant: isActive ? "outline" : "ghost",
//         size,
//       }),
//       className
//     )}
//     {...props}
//   />
// );
// PaginationLink.displayName = "PaginationLink";

// const PaginationPrevious = ({
//   className,
//   ...props
// }: React.ComponentProps<typeof PaginationLink>) => (
//   <PaginationLink
//     aria-label="Go to previous page"
//     size="default"
//     className={cn("gap-1 pl-2.5", className)}
//     {...props}
//   >
//     <ChevronLeft className="h-4 w-4" />
//     <span>Previous</span>
//   </PaginationLink>
// );
// PaginationPrevious.displayName = "PaginationPrevious";

// const PaginationNext = ({
//   className,
//   ...props
// }: React.ComponentProps<typeof PaginationLink>) => (
//   <PaginationLink
//     aria-label="Go to next page"
//     size="default"
//     className={cn("gap-1 pr-2.5", className)}
//     {...props}
//   >
//     <span>Next</span>
//     <ChevronRight className="h-4 w-4" />
//   </PaginationLink>
// );
// PaginationNext.displayName = "PaginationNext";

// const PaginationEllipsis = ({
//   className,
//   ...props
// }: React.ComponentProps<"span">) => (
//   <span
//     aria-hidden
//     className={cn("flex h-9 w-9 items-center justify-center", className)}
//     {...props}
//   >
//     <Ellips className="h-4 w-4" />
//     <span className="sr-only">More pages</span>
//   </span>
// );
// PaginationEllipsis.displayName = "PaginationEllipsis";

// export {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// };

"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, Ellips } from "../icons";
import { Button } from "../ui/button";

export default function Pagination({
  totalItems,
  perPageItems,
}: {
  totalItems: number;
  perPageItems: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const totalPage = Math.ceil(totalItems / perPageItems);
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const onSelect = (value: number) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!value) {
      current.delete("page");
    } else {
      current.set("page", value.toString());
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  const nextPage = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const nextPageNumber = currentPage + 1;
    current.set("page", nextPageNumber.toString());
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };
  const prevPage = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const prevPageNumber = currentPage - 1;
    current.set("page", prevPageNumber.toString());
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  return (
    <div className="flex max-w-xl items-center justify-center gap-x-2 py-4">
      {totalPage > 1 && (
        <>
          <Button
            className="h-10 w-10 rounded-full p-0 text-slate-600"
            variant="outline"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            className="h-10 w-10 rounded-full"
            variant={currentPage === 1 ? "default" : "ghost"}
            onClick={() => onSelect(1)}
          >
            1
          </Button>
          <Button
            className="h-10 w-10 rounded-full"
            variant={currentPage === 2 ? "default" : "ghost"}
            onClick={() => onSelect(2)}
          >
            2
          </Button>
          {totalPage > 3 && currentPage > 3 && (
            <Button className="h-10 w-10 rounded-full p-0" variant="ghost">
              <Ellips className="h-4 w-4" />
            </Button>
          )}
          {totalPage > 2 && currentPage > 2 && (
            <Button
              className="h-10 w-10 rounded-full p-0"
              variant="default"
              onClick={() => onSelect(currentPage)}
            >
              {currentPage}
            </Button>
          )}
          {totalPage > 3 &&
            currentPage + 1 !== totalPage &&
            currentPage < totalPage && (
              <Button className="h-10 w-10 rounded-full p-0" variant="ghost">
                <Ellips className="h-4 w-4" />
              </Button>
            )}
          {totalPage > 2 && currentPage < totalPage && (
            <Button
              className="h-10 w-10 rounded-full"
              variant={currentPage === totalPage ? "default" : "ghost"}
              onClick={() => onSelect(totalPage)}
            >
              {totalPage}
            </Button>
          )}
          <Button
            className="h-10 w-10 rounded-full p-0 text-slate-600"
            variant="outline"
            onClick={nextPage}
            disabled={currentPage === totalPage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  );
}
