"use client";

import { Editor } from "@/components/plate-ui/editor";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons";
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons";
import { cn } from "@/lib/utils";
import { CommentsProvider } from "@udecode/plate-comments";
import { Plate } from "@udecode/plate-common";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { useRef } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CursorOverlay } from "./plate-ui/cursor-overlay";
import { plugins } from "./plate-ui/plate-plugins";
import { TooltipProvider } from "./plate-ui/tooltip";

export default function PlateEditor({
  onInputChange,
}: {
  onInputChange: (data: string) => void;
}) {
  const containerRef = useRef(null);
  const initialValue = [
    {
      id: "1",
      type: ELEMENT_PARAGRAPH,
      children: [{ text: "Write content" }],
    },
  ];

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <CommentsProvider>
          <TooltipProvider>
            <Plate
              onChange={(data) => onInputChange(JSON.stringify(data))}
              plugins={plugins}
              initialValue={initialValue}
            >
              <div
                ref={containerRef}
                className={cn(
                  "relative",

                  "[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4 border rounded-lg"
                )}
              >
                <FixedToolbar>
                  <FixedToolbarButtons />
                </FixedToolbar>

                <Editor
                  className="px-5 py-3 bg-[#F6F7F8] text-[#919EAB]"
                  autoFocus
                  focusRing={false}
                  variant="ghost"
                  size="sm"
                />

                <FloatingToolbar>
                  <FloatingToolbarButtons />
                </FloatingToolbar>

                <CursorOverlay containerRef={containerRef} />
              </div>
            </Plate>
          </TooltipProvider>
        </CommentsProvider>
      </DndProvider>
    </>
  );
}
