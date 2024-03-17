import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Faq2 from "../faq-2/page";

export default function Component() {
  return (
    <div>
      <Container>
        <PageIntro title="Choose your plan" centered>
          <p className="text-base text-neutral-700 mb-20">
            Enjoy lifetime access, community support, and no subscription fees.
          </p>
        </PageIntro>
        <Table className="bg-white border rounded">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]"></TableHead>
              <TableHead>Standard</TableHead>
              <TableHead>Premium</TableHead>
              <TableHead>Enterprise</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex items-end gap-x-1">
                  <p className="font-display text-4xl font-bold tracking-tight text-neutral-950">
                    $9
                  </p>
                  <span>/</span>
                  <span>year</span>
                </div>
                <p className="mt-2 text-sm text-neutral-700 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  culpa?
                </p>
                <Link href="" className={buttonVariants({ size: "sm" })}>
                  Get Started
                </Link>
              </TableCell>
              <TableCell>
                <div className="flex items-end gap-x-1">
                  <p className="font-display text-4xl font-bold tracking-tight text-neutral-950">
                    $49
                  </p>
                  <span>/</span>
                  <span>year</span>
                </div>
                <p className="mt-2 text-sm text-neutral-700 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  culpa?
                </p>
                <Link href="" className={buttonVariants({ size: "sm" })}>
                  Get Started
                </Link>
              </TableCell>
              <TableCell>
                <div className="flex items-end gap-x-1">
                  <p className="font-display text-4xl font-bold tracking-tight text-neutral-950">
                    $99
                  </p>
                  <span>/</span>
                  <span>year</span>
                </div>
                <p className="mt-2 text-sm text-neutral-700 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  culpa?
                </p>
                <Link href="" className={buttonVariants({ size: "sm" })}>
                  Get Started
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Custom Domains</TableCell>
              <TableCell>✔️</TableCell>
              <TableCell>✔️</TableCell>
              <TableCell>✔️</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Collaborators</TableCell>
              <TableCell>1</TableCell>
              <TableCell>5</TableCell>
              <TableCell>Unlimited</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Bandwidth</TableCell>
              <TableCell>100GB</TableCell>
              <TableCell>500GB</TableCell>
              <TableCell>Unmetered</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Advanced CI/CD</TableCell>
              <TableCell />
              <TableCell>✔️</TableCell>
              <TableCell>✔️</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Support</TableCell>
              <TableCell>Community</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>24/7</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Container>
      <Faq2 />
    </div>
  );
}
