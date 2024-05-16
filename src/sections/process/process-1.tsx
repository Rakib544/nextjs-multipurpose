import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";
import WorkFlowCard from "@/components/workflow-card";

interface ProcessProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  processes: Array<{ title: string; description: string; icon?: any }>;
}

export default function Process1({
  eyebrow = "How it works",
  title,
  subtitle = "",
  processes,
}: ProcessProps) {
  return (
    <Container className="mt-20 md:mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        <div>
          <div className="sticky top-6">
            <SectionIntro
              eyebrow={eyebrow}
              title={title}
              className="mb-12 max-w-lg"
            >
              {subtitle}
            </SectionIntro>
          </div>
        </div>
        <FadeIn>
          {processes.map((step, index) => (
            <WorkFlowCard key={index} id={(index + 1).toString()}>
              {step?.icon && (
                <span className="size-12 md:size-14  rounded-full bg-indigo-50 inline-flex justify-center items-center mb-4">
                  {step.icon}
                </span>
              )}
              <h3 className="text-xl font-extrabold mb-2">{step.title}</h3>
              <p className="text-base pb-10 leading-7 text-muted-foreground">
                {step.description}
              </p>
            </WorkFlowCard>
          ))}
        </FadeIn>
      </div>
    </Container>
  );
}
