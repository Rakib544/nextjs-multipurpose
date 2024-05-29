import { Container } from "@/components/container";
import { SectionIntro } from "@/components/section-intro";
import { TeamCard1 } from "@/components/team-card";
import { peoples } from "@/lib/data/team-data";

export default function Team() {
  return (
    <Container className="mt-20 md:mt-32">
      <SectionIntro
        title="Our excellence team that can digitalize your brand"
        className="mb-12"
        eyebrow="Team Member"
      >
        We upholds the highest ethical standards in all our dealings and embrace
        creativity and strive for improvement.
      </SectionIntro>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {peoples.slice(0, 8).map((person) => (
          <li key={person.name}>
            <TeamCard1
              image={person.image.src}
              name={person.name}
              role={person.role}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}
