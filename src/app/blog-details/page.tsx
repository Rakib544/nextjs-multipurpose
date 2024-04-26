import { Border } from "@/components/border";
import CommentCreateForm from "@/components/comment-create-form";
import { Container } from "@/components/container";
import { MessageCircle } from "@/components/icons";
import { Button } from "@/components/ui/button";
import coverImage from "@/images/hero.jpg";
import userImage from "@/images/testimonial_2.jpg";
import { blogComments, blogDetails } from "@/lib/data/blog-data";
import Image from "next/image";

export default function BlogDetails1() {
  return (
    <div>
      <Container className="mt-20">
        <div className="max-w-3xl mx-auto text-center">
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
            className="aspect-[16/9] block rounded-xl mt-8"
          />
          <div
            className="text-left prose prose-h3:font-bold prose-slate prose-base mt-10 max-w-none"
            dangerouslySetInnerHTML={{ __html: blogDetails }}
          />

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

function CommentCard({
  comment,
  author,
  createdAt,
  replies,
}: {
  createdAt: string;
  comment: string;
  author: { name: string; image: string };
  replies: Array<{
    createdAt: string;
    comment: string;
    author: { name: string; image: string };
  }>;
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
        <Button>
          <MessageCircle className="h-4 w-4 mr-1" /> Reply
        </Button>
      </div>
      <p className="text-base text-gray-800 leading-7 mt-4">{comment}</p>

      <CommentReplyCard replies={replies} />
    </div>
  );
}

function CommentReplyCard({
  replies,
}: {
  replies: Array<{
    createdAt: string;
    comment: string;
    author: { name: string; image: string };
  }>;
}) {
  return (
    <div className="relative ml-[25px] before:absolute before:left-[-18px] before:h-full before:w-[2px] before:bg-indigo-50 lg:ml-[60px] lg:before:left-[-30px]">
      {replies.map((reply, i) => (
        <div
          key={i}
          className="relative mt-8 before:absolute before:left-[-18px] before:top-1/3 before:h-[2px] before:w-[13px] before:bg-indigo-50 hover:from-indigo-100 lg:before:left-[-30px] lg:before:w-[20px]"
        >
          <div className="">
            <div className="flex justify-between items-center">
              <div className="flex gap-x-3 items-center">
                <Image
                  src={userImage}
                  className="h-10 w-10 rounded-full object-cover shrink-0"
                  alt=""
                />
                <div>
                  <h4 className="font-bold text-indigo-950 text-sm">
                    {reply.author.name}
                  </h4>
                  <p className="text-xs text-gray-600 font-medium">
                    {new Date(reply.createdAt).toDateString()}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-base text-gray-800 leading-7 mt-4">
              {reply.comment}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
