import { Container } from "@/components/container";
import ForgetPasswordForm from "@/components/forget-password-form";
import { TextUnderline } from "@/components/icons";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forget Password",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ForgetPassword() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Container>
        <div className="w-full max-w-lg">
          <Link
            aria-label="Home"
            href="/"
            className="text-2xl font-extrabold text-primary relative mb-6 inline-block"
          >
            Agenify
            <TextUnderline />
          </Link>
          <h1 className="font-extrabold text-3xl text-foreground">
            Forgot your password?
          </h1>
          <p className="text-muted-foreground mt-2 mb-6 text-base leading-7">
            Enter the email you registered with and we will send you a link to
            reset your password.
          </p>
          <ForgetPasswordForm />
        </div>
      </Container>
    </main>
  );
}
