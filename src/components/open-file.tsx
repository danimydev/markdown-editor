import { useAtom } from "jotai";
import { UploadIcon } from "lucide-react";

import { editorTextAtom, fileUrlAtom } from "@/atoms";

import { promptMdFile } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export const OpenFile = () => {
  const [, setFileUrl] = useAtom(fileUrlAtom);
  const [, setEditorText] = useAtom(editorTextAtom);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={(e) => {
        e.preventDefault();
        promptMdFile()
          .then(async (file) => {
            return {
              name: file.name,
              text: await file.text(),
            };
          })
          .then((fileData) => {
            setFileUrl(fileData.name);
            setEditorText(fileData.text);
          })
          .catch((e) => alert(e.toString()));
      }}
    >
      <UploadIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
    </Button>
  );
};
