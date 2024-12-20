import { generateBlurImageURL } from "@/lib/data/blur-image-data";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { MessageCircle } from "./icons";
import { Button } from "./ui/button";

interface CommentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  createdAt: string;
  comment: string;
  author: { name: string; image: string | StaticImageData };
  replies: Array<{
    createdAt: string;
    comment: string;
    author: { name: string; image: string | StaticImageData };
  }>;
}

export function CommentCard({
  comment,
  author,
  createdAt,
  replies,
  className,
}: CommentCardProps) {
  return (
    <div className={className}>
      <div className="flex justify-between items-center">
        <div className="flex gap-x-4 items-center">
          <Image
            src={author.image}
            className="h-14 w-14 rounded-full object-cover shrink-0"
            alt={author.name}
            placeholder="blur"
            blurDataURL={generateBlurImageURL()}
          />
          <div>
            <h4 className="font-bold text-foreground">{author.name}</h4>
            <p className="text-sm text-muted-foreground font-medium">
              {new Date(createdAt).toDateString()}
            </p>
          </div>
        </div>
        <Button>
          <MessageCircle className="h-4 w-4 mr-1" /> Reply
        </Button>
      </div>
      <p className="text-base text-foreground leading-7 mt-4">{comment}</p>

      <CommentReplyCard replies={replies} />
    </div>
  );
}

export function CommentReplyCard({
  replies,
}: {
  replies: Array<{
    createdAt: string;
    comment: string;
    author: { name: string; image: string | StaticImageData };
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
                  placeholder="blur"
                  blurDataURL={generateBlurImageURL()}
                  src={reply.author.image}
                  className="h-10 w-10 rounded-full object-cover shrink-0"
                  alt=""
                />
                <div>
                  <h4 className="font-bold text-foreground text-sm">
                    {reply.author.name}
                  </h4>
                  <p className="text-xs text-muted-foreground font-medium">
                    {new Date(reply.createdAt).toDateString()}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-base text-foreground leading-7 mt-4">
              {reply.comment}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
