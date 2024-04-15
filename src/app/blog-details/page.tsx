import { Border } from "@/components/border";
import CommentCreateForm from "@/components/comment-create-form";
import { Container } from "@/components/container";
import { MessageCircle } from "@/components/icons";
import { Button } from "@/components/ui/button";
import coverImage from "@/images/hero.jpg";
import userImage from "@/images/testimonial_1.jpg";
import { blogComments } from "@/lib/data/blog-data";
import Image from "next/image";

export default function BlogDetails1() {
  return (
    <div>
      <Container className="mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-neutral-700 font-medium mb-4">
            19 October, 2023
          </p>
          <h1 className="text-3xl max-w-full font-extrabold tracking-tight lg:text-4.5xl/tight">
            The Future of Web Development: Our Predictions for 2023
          </h1>
          <p className="font-medium mt-3 text-sm text-neutral-900">
            by Chelsea Hagon, Senior Developer
          </p>
          <Image
            src={coverImage}
            alt=""
            className="aspect-[16/9] block rounded-xl mt-8"
          />
          <div className="text-left prose prose-slate mt-10 max-w-none">
            <h3>1. AI Assisted Development</h3>
            <p>
              With the launch of Github Copilot in 2022 the industry got its
              first glimpse at what it would look like to have Stack Overflow
              plumbed straight into your IDE. Copilot has given thousands of
              developers what they always longed for: plausible deniability over
              the bugs they write.
            </p>
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
                  key={index}
                />
              ))}
            </div>
          </div>
          {/* <div className="p-4 rounded-xl bg-indigo-50 md:p-6"> */}
          <CommentCreateForm />
          {/* </div> */}
        </div>
      </Container>
    </div>
  );
}

function CommentCard({
  comment,
  author,
  createdAt,
}: {
  createdAt: string;
  comment: string;
  author: { name: string; image: string };
}) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-x-4 items-center">
          <Image
            src={userImage}
            className="h-14 w-14 rounded-full object-cover shrink-0"
            alt={author.name}
          />
          <div>
            <h4 className="font-bold text-indigo-950">{author.name}</h4>
            <p className="text-sm text-gray-600 font-medium">
              {new Date(createdAt).toDateString()}
            </p>
          </div>
        </div>
        <Button variant="secondary" size="lg">
          <MessageCircle className="h-4 w-4 mr-1" /> Reply
        </Button>
      </div>
      <p className="text-base text-gray-600 leading-7 mt-4">{comment}</p>

      <CommentReplyCard />
    </div>
  );
}

function CommentReplyCard() {
  return (
    <div className="relative ml-[25px] before:absolute before:left-[-18px] before:h-full before:w-[3px] before:bg-indigo-100 lg:ml-[60px] lg:before:left-[-30px]">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="relative mt-5 rounded-xl border bg-gray-50 before:absolute before:left-[-18px] before:top-1/3 before:h-[3px] before:w-[13px] before:bg-indigo-100 hover:from-indigo-100 lg:before:left-[-30px] lg:before:w-[20px]"
        >
          <div className="p-5">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-3 items-center">
                <Image
                  src={userImage}
                  className="h-10 w-10 rounded-full object-cover shrink-0"
                  alt=""
                />
                <div>
                  <h4 className="font-bold text-indigo-950 text-sm">
                    Md Rakib
                  </h4>
                  <p className="text-xs text-gray-600 font-medium">
                    19 October, 2023
                  </p>
                </div>
              </div>
            </div>

            <p className="text-base text-gray-600 leading-7 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi nihil ipsam recusandae velit sed dolorem ex voluptatum
              rem distinctio asperiores.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
