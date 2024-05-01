"use client";

import { Editor } from "@/components/plate-ui/editor";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons";
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons";
import { cn } from "@/lib/utils";
import { Plate } from "@udecode/plate-common";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { useRef, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CursorOverlay } from "./plate-ui/cursor-overlay";
import { plugins } from "./plate-ui/plate-plugins";
import { TooltipProvider } from "./plate-ui/tooltip";

export default function PlateEditor() {
  const containerRef = useRef(null);
  const [value, setValue] = useState<
    | undefined
    | {
        id: string;
        type: string;
        children: {
          text: string;
        }[];
      }[]
  >();

  const initialValue = [
    {
      id: "1",
      type: ELEMENT_PARAGRAPH,
      children: [{ text: "Hello, World!" }],
    },
  ];

  console.log(value);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <TooltipProvider>
          <Plate
            onChange={(data) => setValue(data)}
            plugins={plugins}
            initialValue={initialValue}
          >
            <div
              ref={containerRef}
              className={cn(
                "relative",
                // Block selection
                "[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4 border rounded-lg"
              )}
            >
              <FixedToolbar>
                <FixedToolbarButtons />
              </FixedToolbar>

              <Editor
                className="p-8 bg-[#F6F7F8]"
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
      </DndProvider>
    </>
  );
}
