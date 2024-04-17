import { Container } from "@/components/container";
import ForgetPasswordForm from "@/components/forget-password-form";

export default function ForgetPassword() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Container>
        <div className="w-full max-w-lg">
          <h1 className="font-extrabold text-3xl text-indigo-950">
            Forgot your password?
          </h1>
          <p className="text-gray-600 mt-2 mb-6 text-base leading-7">
            Enter the email you registered with and we will send you a link to
            reset your password.
          </p>
          <ForgetPasswordForm />
        </div>
      </Container>
    </main>
  );
}
