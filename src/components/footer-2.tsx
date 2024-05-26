"use client";
import { footerNavigation } from "@/lib/data/footer-navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { FadeIn, FadeInStagger } from "./fade-in";
import { ArrowRight, TextUnderline } from "./icons";
import { List, ListItem } from "./list";
import { NewsletterForm } from "./newsletter-form";
import { SocialMediaProfiles } from "./social-media-profiles";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Navigation() {
  const company = footerNavigation[1];
  const work = footerNavigation[0];
  return (
    <nav className="col-span-12 md:col-span-12 lg:col-span-8">
      <ul className="grid grid-cols-12 md:gap-x-2 gap-y-12">
        <li className="col-span-12 sm:col-span-6">
          <div>
            <Link
              aria-label="Home"
              href="/"
              className="text-2xl font-extrabold text-primary !relative w-full z-20"
            >
              Agenify
              <TextUnderline className="z-[-1]" />
            </Link>

            <p className="text-muted-foreground text-base mt-6 leading-8 mb-6">
              We are developer studio working at the intersection of design and
              technology. It’s a really busy intersection though — a lot of our
              staff have been involved in hit and runs.
            </p>
            <SocialMediaProfiles />
          </div>
        </li>
        <li className="col-span-6 sm:col-span-3">
          <div className="font-display text-xl font-extrabold text-foreground">
            {company.title}
          </div>
          <ul className="mt-6 text-muted-foreground">
            {company.links.map((link: any) => (
              <li key={link.title} className="mt-4 ">
                <Link
                  href={link.href}
                  className="transition hover:text-primary text-base"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="col-span-6 sm:col-span-3">
          <div className="font-display text-xl font-extrabold text-foreground">
            {work.title}
          </div>
          <ul className="mt-6 text-muted-foreground">
            {work.links.map((link: any) => (
              <li key={link.title} className="mt-4">
                <Link
                  href={link.href}
                  className="transition hover:text-primary text-base"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export function Footer2() {
  const pathname = usePathname();
  const isAuthRoute = pathname.startsWith("/auth/");
  const isDashboardRoute = pathname.startsWith("/dashboard");
  const isDocsRoute = pathname.startsWith("/docs");
  const isPreviewPage = pathname === "/";

  const isFooterHidden =
    isAuthRoute || isDashboardRoute || isDocsRoute || isPreviewPage;
  return (
    <footer
      className={cn(
        "bg-primary rounded-t-[30px] mt-20 md:mt-32",
        isFooterHidden ? "hidden" : ""
      )}
    >
      <div>
        <Container className="py-20 md:py-24">
          <FadeInStagger
            faster
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-end"
          >
            <FadeIn className="">
              <h4 className="max-w-sm text-2xl md:text-3xl/tight font-extrabold text-white">
                Get a Free consultation to boost your business
              </h4>
              <p className="lg:max-w-xl mx-auto text-primary-foreground mt-3 leading-7">
                We&apos;ll focus on timezone problems
              </p>
              <List className="mt-4 border-indigo-400">
                <ListItem invert>
                  A marketing audit is an evaluation of your company&apos;s
                  marketing efforts
                </ListItem>
                <ListItem invert>
                  Evaluate your target audience to see if they have changed
                </ListItem>
                <ListItem invert>
                  Analyze your website to ensure it is user-friendly,
                  mobile-responsive
                </ListItem>
              </List>
            </FadeIn>
            <FadeIn>
              <div className="bg-white p-7 sm:p-10 rounded-[40px]">
                <h5 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-10">
                  Get Your free audit
                </h5>
                <form className="space-y-6">
                  <Input
                    placeholder="Your name"
                    className="rounded-full pl-6"
                  />
                  <Input
                    placeholder="Your email"
                    className="rounded-full pl-6"
                  />
                  <Button size="lg" className="w-full">
                    Next <ArrowRight className="size-4 ml-1" />
                  </Button>
                </form>
              </div>
            </FadeIn>
          </FadeInStagger>
        </Container>
      </div>
      <div className="bg-slate-100 rounded-tr-[40px] rounded-tl-[40px]">
        <Container className={`pt-24 w-full`}>
          <FadeIn className="lg:px-4">
            <div className="grid grid-cols-12 md:gap-x-8 gap-y-16 relative">
              <Navigation />
              <div className="col-span-12 md:col-span-12 lg:col-span-4">
                <NewsletterForm />
              </div>
            </div>
            <div className="pb-10 mt-24 flex justify-between flex-col sm:flex-row gap-y-4 items-center border-t border-indigo-950/10 pt-12">
              <p className="text-muted-foreground text-base">
                © {new Date().getFullYear()}. All Right Reserved
              </p>
              <div className="gap-x-4 text-muted-foreground flex text-base">
                <Link href="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
                <Link href="/terms-condition" className="hover:text-primary">
                  Terms of Condition
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>
    </footer>
  );
}
