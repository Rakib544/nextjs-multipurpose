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
  ...props
}: FaqCardProps) {
  return (
    <FadeIn {...(props as any)}>
      <div className="flex gap-x-4">
        <div className="h-10 w-10 border-[1.5px] font-semibold rounded-lg shrink-0 flex justify-center items-center">
          {id.padStart(2, "0")}
        </div>
        <div>
          <h2 className="font-semibold text-base text-neutral-950">
            {question}
          </h2>
          <p className="text-base leading-7 text-neutral-700 mt-2">{answer}</p>
        </div>
      </div>
    </FadeIn>
  );
}
