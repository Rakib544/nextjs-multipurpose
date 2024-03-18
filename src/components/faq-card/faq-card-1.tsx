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
      <AccordionItem className="border-none" value={`item=${id}`}>
        <AccordionTrigger className="font-semibold text-base text-neutral-950">
          <div>
            <span className="h-10 w-10 border-[1.5px] rounded-lg inline-flex items-center justify-center mr-3">
              {id.padStart(2, "0")}
            </span>
            {question}
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-base leading-7 text-neutral-700 ml-12">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </FadeIn>
  );
}
