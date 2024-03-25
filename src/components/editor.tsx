import { HTMLAttributes } from "react";
import { useAtom } from "jotai";

import { editorTextAtom } from "../atoms";

export const Editor: React.FC<HTMLAttributes<HTMLTextAreaElement>> = (
  props,
) => {
  const [editorText, setEditorText] = useAtom(editorTextAtom);

  return (
    <textarea
      {...props}
      value={editorText}
      onChange={(e) => setEditorText(e.target.value)}
      autoFocus
      placeholder="Enter markdown here..."
    />
  );
};
