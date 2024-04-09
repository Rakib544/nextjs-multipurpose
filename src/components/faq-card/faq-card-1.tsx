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
  ...props
}: FaqCardProps) {
  return (
    <FadeIn {...(props as any)}>
      <AccordionItem
        className="border-none data-[state=open]:bg-indigo-600 px-3 md:px-4 rounded-xl data-[state=open]:text-slate-300  text-neutral-700"
        value={`item-${id}`}
      >
        <AccordionTrigger className="font-semibold text-base data-[state=open]:text-white text-indigo-950 text-start">
          <div>
            <span className="hidden h-10 w-10 border-[1.5px] rounded-lg md:inline-flex items-center justify-center mr-3">
              {id.padStart(2, "0")}
            </span>
            {question}
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-base leading-7   ml-0 md:ml-12">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </FadeIn>
  );
}
