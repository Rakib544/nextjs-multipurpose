import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";

const processSteps = [
  {
    title: "Uncovering Insights",
    description:
      "Delving deep to understand your audience, objectives, and market landscape.",
  },
  {
    title: "Creative Exploration",
    description:
      "Collaborative brainstorming to generate innovative solutions aligned with your vision.",
  },
  {
    title: "Bringing Ideas to Life",
    description:
      "Transforming concepts into interactive prototypes for detailed feedback and iterative refinement.",
  },
  {
    title: "Refining for Perfection",
    description:
      "Conducting rigorous testing to ensure seamless user experiences and continuous improvement.",
  },
];

export default function Process2() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        title="Smart and effective working process"
        eyebrow="Our process"
        className="mb-12 mx-auto text-center"
      >
        Streamline your business workflow with our smart and effective process
        for optimal results
      </SectionIntro>
      <FadeInStagger
        faster
        className="grid grid-cols-1 gap-5 md:grid-cold-2 lg:grid-cols-4"
      >
        {processSteps.map((p, index) => (
          <FadeIn key={index}>
            <span className="inline-flex size-12 justify-center items-center font-bold rounded-xl bg-indigo-600 text-white">
              {index + 1}
            </span>
            <h3 className="mt-4 text-lg font-bold mb-3">{p.title}</h3>
            <p className="text-base leading-7 text-muted-foreground">
              {p.description}
            </p>
          </FadeIn>
        ))}
      </FadeInStagger>
    </Container>
  );
}
