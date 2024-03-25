import { useAtom } from "jotai";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import remarkBreaks from "remark-breaks";

import { editorTextAtom } from "../atoms";

export const Previewer = () => {
  const [editorText] = useAtom(editorTextAtom);

  return (
    <Markdown
      remarkPlugins={[remarkGfm, remarkEmoji, remarkBreaks]}
      children={editorText}
    />
  );
};
