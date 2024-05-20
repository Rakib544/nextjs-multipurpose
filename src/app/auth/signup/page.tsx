import { TextUnderline } from "@/components/icons";
import SignUpForm from "@/components/signup-form";
import dashboardBannerImage from "@/images/demo-1/banner.webp";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign up and get started",
  robots: {
    index: true,
    follow: true,
  },
};

export default function SignUp() {
  return (
    <div className="min-h-screen h-full">
      <div className="grid grid-cols-12 gap-6 items-center min-h-screen">
        <div className="col-span-12 lg:col-span-6 mt-20 lg:mt-0 h-full flex items-center ">
          <div className="max-w-lg w-full mx-auto px-6">
            <Link
              aria-label="Home"
              href="/"
              className="text-2xl font-extrabold text-primary relative inline-block mb-6"
            >
              Agenify
              <TextUnderline />
            </Link>
            <h1 className="font-extrabold text-2xl text-foreground">
              Create your Account
            </h1>
            <p className="text-muted-foreground leading-7 text-base mt-1 mb-8">
              Welcome back! Please enter your details
            </p>
            <SignUpForm />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 relative h-full hidden lg:flex items-center bg-primary lg:mt-0">
          <div className="lg:max-w-xl mx-auto px-6">
            <h2 className="text-2xl max-w-md font-bold text-white mt-20">
              The simplest way to manage your agency
            </h2>
            <p className="mt-2 text-primary-foreground max-w-md">
              Enter your credentials to get started! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Neque, necessitatibus!
            </p>
            <Image
              src={dashboardBannerImage}
              alt=""
              height={800}
              width={500}
              className="my-8 w-full rounded-lg h-[300px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
