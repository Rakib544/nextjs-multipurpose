import coverImage from "@/images/hero.jpg";

import { Border } from "@/components/border";
import { CommentCard } from "@/components/comment-card";
import CommentCreateForm from "@/components/comment-create-form";
import Description from "@/components/description";
import { buttonVariants } from "@/components/ui/button";
import { blogComments, blogDetails } from "@/lib/data/blog-data";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function JobDetails() {
  return (
    <div>
      <Link
        href="/dashboard/articles"
        className={buttonVariants({ variant: "ghost" })}
      >
        <ArrowLeft className="h-4 w-4 mr-1.5" /> Back
      </Link>
      <div className="max-w-3xl mx-auto text-center mt-12">
        <p className="text-sm text-neutral-700 font-medium mb-4">
          19 October, 2023
        </p>
        <h1 className="text-3xl max-w-full font-extrabold tracking-tight lg:text-4.5xl/tight text-indigo-950">
          The Future of Web Development: Our Predictions for 2023
        </h1>
        <p className="font-medium mt-3 text-sm text-neutral-900">
          by Chelsea Hagon, Senior Developer
        </p>
        <Image
          src={coverImage}
          alt=""
          className="aspect-[16/9] block rounded-xl mt-8 mb-12"
        />
        <div className="text-left">
          <Description description={blogDetails} />
        </div>

        <div className="text-left mt-20">
          <h3 className="font-bold text-xl mb-4">5 Comments</h3>
          <Border position="top" />
          <div className="space-y-8 mt-12">
            {blogComments.map((comment, index) => (
              <CommentCard
                author={comment.author}
                comment={comment.comment}
                createdAt={comment.createdAt}
                replies={comment.replies}
                key={index}
              />
            ))}
          </div>
        </div>

        <CommentCreateForm />
      </div>
    </div>
  );
}
