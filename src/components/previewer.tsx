import { HTMLAttributes } from "react";
import { useAtom } from "jotai";
import Markdown from "react-markdown";

import { editorTextAtom } from "../atoms";

export const Previewer: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const [editorText] = useAtom(editorTextAtom);

  return <Markdown {...props}>{editorText}</Markdown>;
};
