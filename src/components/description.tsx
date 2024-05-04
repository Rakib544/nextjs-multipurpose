"use client";

import { Editor } from "@/components/plate-ui/editor";
import { plugins } from "@/components/plate-ui/plate-plugins";
import { cn } from "@udecode/cn";
import { CommentsProvider } from "@udecode/plate-comments";
import { Plate } from "@udecode/plate-common";

export default function Description({ description }: { description: any }) {
  return (
    <CommentsProvider>
      <Plate plugins={plugins} readOnly initialValue={description}>
        <div
          className={cn(
            "relative",

            "w-full"
          )}
        >
          <Editor
            className="py-0 !px-0"
            autoFocus
            focusRing={false}
            variant="ghost"
            size="md"
          />
        </div>
      </Plate>
    </CommentsProvider>
  );
}
