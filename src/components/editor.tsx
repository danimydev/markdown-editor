import { HTMLAttributes } from "react";
import { useAtom } from "jotai";

import { editorTextAtom } from "../atoms";

export const Editor: React.FC<HTMLAttributes<HTMLTextAreaElement>> = (
  props,
) => {
  const [editorText, setEditorTex] = useAtom(editorTextAtom);

  return (
    <textarea
      {...props}
      placeholder="Enter markdown text..."
      value={editorText}
      onChange={(e) => setEditorTex(e.target.value)}
    />
  );
};
