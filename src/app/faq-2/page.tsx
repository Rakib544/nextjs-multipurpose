import { Container } from "@/components/container";
import { FadeInStagger } from "@/components/fade-in";
import { FaqCard2 } from "@/components/faq-card";
import { GridPattern } from "@/components/grid-pattern";
import { PageIntro } from "@/components/page-intro";

const faqData = [
  {
    id: 1,
    question: "What services does your agency offer?",
    answer:
      "Our agency specializes in a wide range of services including web design, digital marketing, branding, and content creation.",
  },
  {
    id: 2,
    question: "How do I get started with your agency?",
    answer:
      "Getting started is easy! Simply reach out to us via our contact page or email, and one of our representatives will get in touch with you to discuss your project needs.",
  },
  {
    id: 3,
    question: "What industries do you work with?",
    answer:
      "We work with clients across various industries including technology, healthcare, e-commerce, finance, and more.",
  },
  {
    id: 4,
    question: "Can you provide examples of your previous work?",
    answer:
      "Absolutely! We have a portfolio section on our website showcasing some of our past projects. Feel free to take a look and see the quality of our work.",
  },
  {
    id: 5,
    question: "How long does it typically take to complete a project?",
    answer:
      "Project timelines vary depending on the scope and complexity of the project. We'll provide you with a detailed timeline during our initial consultation.",
  },
  {
    id: 6,
    question: "What sets your agency apart from others?",
    answer:
      "Our agency is committed to delivering exceptional results while providing personalized attention to each client. We strive for creativity, innovation, and excellence in everything we do.",
  },
  {
    id: 7,
    question: "Do you offer ongoing support after the project is completed?",
    answer:
      "Yes, we offer ongoing support and maintenance services to ensure your website or digital assets continue to perform optimally.",
  },
  {
    id: 8,
    question: "How do you determine pricing for your services?",
    answer:
      "Pricing is determined based on factors such as project complexity, scope, and specific client requirements. We offer competitive rates tailored to fit your budget.",
  },
  {
    id: 9,
    question: "Can you help with search engine optimization (SEO)?",
    answer:
      "Yes, we offer comprehensive SEO services to help improve your website's visibility and ranking on search engines like Google.",
  },
  {
    id: 10,
    question: "Do you provide social media management services?",
    answer:
      "Yes, we offer social media management services to help you effectively engage with your audience across various platforms.",
  },
  {
    id: 11,
    question: "What steps do you take to ensure the security of my website?",
    answer:
      "We implement industry best practices for website security, including regular updates, strong password protection, and SSL encryption.",
  },
  {
    id: 12,
    question: "How do I track the progress of my project?",
    answer:
      "We provide regular updates and progress reports throughout the duration of your project. You'll have access to our project management tools to track milestones and tasks.",
  },
  {
    id: 13,
    question: "What happens if I'm not satisfied with the final outcome?",
    answer:
      "Your satisfaction is our top priority. If you're not completely satisfied with the final outcome, we'll work with you to make any necessary revisions until you're happy with the result.",
  },
  {
    id: 14,
    question: "Do you offer website hosting and domain registration services?",
    answer:
      "Yes, we provide website hosting and domain registration services to simplify the process of launching your website.",
  },
  {
    id: 15,
    question: "How can I contact your agency for further inquiries?",
    answer:
      "You can contact us through our website's contact form or by emailing us directly at [agency email address]. We're here to answer any questions you may have and discuss how we can help you achieve your goals.",
  },
];

export default function Faq2() {
  return (
    <div>
      <PageIntro title="Frequently asked questions">
        <p>
          {" "}
          These are the most commonly asked questions about us and billing.
          Can&apos;t find what you are looking for?{" "}
          <a className="underline" href="mailto:md.rakib10122003@gmail.com">
            Chat to our Support Team!
          </a>
        </p>
      </PageIntro>

      <div className="absolute inset-0 z-[-1] top-0 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern />
      </div>

      <Container className="mt-16 lg:mt-24">
        <div className=" mt-16">
          <FadeInStagger faster>
            <div className="mt-6 grid grid-cols-12 gap-6">
              {faqData.map((faq) => (
                <FaqCard2
                  key={faq.id}
                  id={faq.id.toString()}
                  answer={faq.answer}
                  question={faq.question}
                  className="col-span-12 lg:col-span-6"
                />
              ))}
            </div>
          </FadeInStagger>
        </div>
      </Container>
    </div>
  );
}
