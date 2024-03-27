import { open } from "@tauri-apps/api/dialog";
import { readTextFile, writeTextFile } from "@tauri-apps/api/fs";
import { useAtom } from "jotai";
import { UploadIcon, SaveIcon } from "lucide-react";

import { editorTextAtom, fileUrlAtom } from "@/atoms";

import { Button } from "@/components/ui/button";

import { ModeToggle } from "./mode-toggle";

export const Controls = () => {
  const [editorText, setEditorText] = useAtom(editorTextAtom);
  const [fileUrl, setFileUrl] = useAtom(fileUrlAtom);

  return (
    <div className="flex flex-col space-y-2 fixed top-3 right-3 opacity-40 hover:opacity-100 transition-all">
      <ModeToggle />
      <Button
        variant="outline"
        size="icon"
        onClick={async (e) => {
          e.preventDefault();
          const path = await open({
            title: "Open Markdown File",
            filters: [
              {
                name: "Select only markdown files",
                extensions: ["md"],
              },
            ],
            multiple: false,
          });

          if (!path || typeof path !== "string") {
            return;
          }

          const content = await readTextFile(path);

          setFileUrl(path);
          setEditorText(content);
        }}
      >
        <UploadIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={async (e) => {
          e.preventDefault();
          await writeTextFile(fileUrl, editorText);
        }}
      >
        <SaveIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
      </Button>
    </div>
  );
};
