import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import { useAtom } from "jotai";

import { markdownTextAtom, themeAtom, windowSizeAtom } from "../atoms";

export const Render = () => {
  const [markdownText] = useAtom(markdownTextAtom);
  const [theme] = useAtom(themeAtom);
  const [windowSize] = useAtom(windowSizeAtom);

  const themeStyles: React.CSSProperties = theme === "dark"
    ? {
      color: "whitesmoke",
      backgroundColor: "#202020",
    }
    : {
      color: "black",
      backgroundColor: "white",
    }

  return (
    <div
      style={{
        flex: 1,
        lineHeight: 1.5,
        padding: 10,
        height: windowSize.height,
        ...themeStyles
      }}
    >
      <Markdown remarkPlugins={[remarkGfm, remarkGemoji]}>
        {markdownText}
      </Markdown>
    </div>
  );
}
