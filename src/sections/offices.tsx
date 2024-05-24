import { Container } from "@/components/container";
import { FadeIn, FadeInStagger } from "@/components/fade-in";
import { SectionIntro } from "@/components/section-intro";

const offices = [
  {
    city: "Copenhagen",
    address: "1 Carlsberg Gate",
    postalCode: "1260",
    location: "København, Denmark",
  },
  {
    city: "London",
    address: "1 Carlsberg Gate",
    postalCode: "1260",
    location: "København, Denmark",
  },
  {
    city: "Sydney",
    address: "1 Carlsberg Gate",
    postalCode: "1260",
    location: "København, Denmark",
  },
  {
    city: "New York",
    address: "1 Carlsberg Gate",
    postalCode: "1260",
    location: "København, Denmark",
  },
];

export default function Offices() {
  return (
    <div className="bg-indigo-600 py-20 md:py-32 mt-20 md:mt-32">
      <Container>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <SectionIntro
              eyebrow="Our Locations"
              title="Visit our offices"
              invert
            >
              Discover the unique services and welcoming atmosphere at each of
              our office locations by visiting us today.
            </SectionIntro>
          </div>
          <FadeInStagger
            faster
            className="col-span-12 md:col-span-7 grid grid-cols-1  sm:grid-cols-2 gap-6"
          >
            {offices.map((office, index) => (
              <FadeIn key={index}>
                <h4 className="text-white font-bold text-base md:text-lg ">
                  {office.city}
                </h4>
                <p className="text-base mt-1 text-primary-foreground">
                  {office.address}
                </p>
                <p className="text-base text-primary-foreground">
                  {office.postalCode}, {office.location}
                </p>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </div>
  );
}
