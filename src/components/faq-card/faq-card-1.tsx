import { cn } from "@/lib/utils";
import { FadeIn } from "../fade-in";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface FaqCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  question: string;
  answer: string;
}

export default function FaqCard1({
  id,
  question,
  answer,
  className,
  ...props
}: FaqCardProps) {
  return (
    <FadeIn {...(props as any)}>
      <AccordionItem
        className={cn(
          "border-none data-[state=open]:bg-indigo-600 px-3 md:px-4 rounded-xl data-[state=open]:text-primary-foreground text-muted-foreground",
          className
        )}
        value={`item-${id}`}
      >
        <AccordionTrigger className="font-semibold text-base data-[state=open]:text-white text-foreground !text-left">
          <span>
            {" "}
            <span className="hidden h-10 w-10 border-[1.5px] rounded-lg md:inline-flex items-center justify-center mr-3">
              {id.padStart(2, "0")}
            </span>
            {question}
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-base leading-7 text-left ml-0 md:ml-12">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </FadeIn>
  );
}
