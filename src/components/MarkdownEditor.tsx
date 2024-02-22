import { useAtom } from "jotai";
import Editor from "@monaco-editor/react";

import { markdownTextAtom, windowSizeAtom, themeAtom } from "../atoms";

export const MarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useAtom(markdownTextAtom);
  const [windowSize] = useAtom(windowSizeAtom);
  const [theme] = useAtom(themeAtom);

  return (
    <Editor
      theme={theme === "dark" ? "vs-dark" : "vs-light"}
      height={windowSize.height}
      width={windowSize.width / 2}
      defaultLanguage="markdown"
      defaultValue={markdownText}
      onChange={(value) => {
        if (value) {
          setMarkdownText(value);
        } else {
          setMarkdownText("");
        }
      }}
      options={{
        automaticLayout: true,
        tabSize: 2,
        renderLineHighlight: "none",
        minimap: {
          enabled: false,
        },
        scrollbar: {
          verticalScrollbarSize: 0,
        },
        padding: {
          top: 0,
          bottom: 0,
        },
        fontSize: 14,
        lineNumbers: "interval",
        lineNumbersMinChars: 4
      }}
    />
  );
}
