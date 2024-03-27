import { useAtom } from "jotai";

import { editorTextAtom } from "@/atoms";

import { Textarea } from "@/components/ui/textarea";

export const Editor = () => {
  const [editorText, setEditorText] = useAtom(editorTextAtom);

  return (
    <Textarea
      className="rounded-none p-2 min-h-[100vh] h-[100%] resize-none border-none"
      autoFocus
      placeholder="Enter markdown here..."
      value={editorText}
      onChange={(e) => setEditorText(e.target.value)}
    />
  );
};
