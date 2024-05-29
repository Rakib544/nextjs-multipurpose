"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface InfiniteMovingProps extends React.HTMLAttributes<HTMLUListElement> {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
}

const InfiniteMoving = ({
  className,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  ...props
}: InfiniteMovingProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div ref={containerRef} className="scroller relative z-20 overflow-hidden">
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-5 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
          className
        )}
        {...props}
      />
    </div>
  );
};

const InfiniteMovingItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => {
  return (
    <li
      ref={ref}
      className={cn(
        "w-[350px] max-w-full relative rounded-2xl flex-shrink-0 md:w-[200px]",
        className
      )}
      {...props}
    />
  );
});

InfiniteMovingItem.displayName = "InfiniteMovingItem";

export { InfiniteMoving, InfiniteMovingItem };
