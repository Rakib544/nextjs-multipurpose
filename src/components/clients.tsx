import { clients } from "@/lib/data/clients-data";
import Image from "next/image";
import { Container } from "./container";
import { FadeIn, FadeInStagger } from "./fade-in";

export function Clients() {
  return (
    <Container>
      <FadeIn className="flex justify-center gap-x-8">
        <h2 className="text-center font-display font-medium tracking-wider">
          We’ve worked with hundreds of amazing people
        </h2>
      </FadeIn>
      <FadeInStagger faster>
        <ul className="mt-6 grid grid-cols-12 max-w-5xl mx-auto gap-y-12 items-center">
          {clients.map((client) => (
            <li key={client.id} className="col-span-2">
              <FadeIn>
                <Image src={client.image} alt={client.href} className="" />
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  );
}
