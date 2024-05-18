import { Border } from "@/components/border";
import { CommentCard } from "@/components/comment-card";
import CommentCreateForm from "@/components/comment-create-form";
import { Container } from "@/components/container";
import Description from "@/components/description";
import coverImage from "@/images/blogs/blog-1.avif";

import { blogComments, blogDetails } from "@/lib/data/blog-data";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The future of web development: our prediction for 2023",
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogDetails1() {
  return (
    <div>
      <Container className="mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground font-medium mb-4">
            19 October, 2023
          </p>
          <h1 className="text-3xl max-w-full font-extrabold tracking-tight lg:text-4.5xl/tight text-foreground">
            The Future of Web Development: Our Predictions for 2023
          </h1>
          <p className="font-medium mt-3 text-sm text-muted-foreground">
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
      </Container>
    </div>
  );
}
