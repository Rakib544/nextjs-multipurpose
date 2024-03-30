import { cn } from "@/lib/utils";
import { CheckIcon } from "./icons";

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {}
interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {}

const List = ({ className, ...props }: ListProps) => {
  return <ul className={cn("list-inside space-y-1", className)} {...props} />;
};

const ListItem = ({ className, children, ...props }: ListItemProps) => {
  return (
    <li
      className={cn(
        "text-neutral-700 !leading-7 font-medium flex gap-x-1",
        className
      )}
      {...props}
    >
      <CheckIcon className="h-7 w-7 shrink-0 fill-indigo-600" />{" "}
      <span>{children}</span>
    </li>
  );
};

export { List, ListItem };
