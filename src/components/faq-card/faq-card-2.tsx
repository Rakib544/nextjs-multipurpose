import { cn } from "@/lib/utils";
import { FadeIn } from "../fade-in";

interface FaqCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  question: string;
  answer: string;
}

export default function FaqCard2({
  id,
  question,
  answer,
  className,
  ...props
}: FaqCardProps) {
  return (
    <FadeIn {...(props as any)}>
      <div className={cn("flex flex-col md:flex-row gap-x-4", className)}>
        <div className="h-10 bg-indigo-600 text-white w-10 mb-2 md:mb-0 font-semibold rounded-xl shrink-0 flex justify-center items-center">
          {id.padStart(2, "0")}
        </div>
        <div>
          <h2 className="font-bold text-lg text-foreground">{question}</h2>
          <p className="text-base leading-7 text-muted-foreground mt-2">
            {answer}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
