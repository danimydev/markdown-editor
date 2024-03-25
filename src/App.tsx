import { useState } from "react";
import { useAtom } from "jotai";
import "./App.css";

import { fontFamilyAtom, fontSizeAtom } from "./atoms";

import { Editor } from "./components/editor";
import { Previewer } from "./components/previewer";

export const App = () => {
  const [fontFamily] = useAtom(fontFamilyAtom);
  const [fontSize] = useAtom(fontSizeAtom);
  const [togglePreview] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        overflowY: "hidden",
      }}
    >
      {togglePreview ? (
        <div
          style={{
            maxWidth: 500,
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Previewer />
        </div>
      ) : (
        <Editor
          style={{
            fontFamily: fontFamily,
            fontSize: fontSize,
            resize: "vertical",
            width: "100%",
            height: "100%",
          }}
        />
      )}
    </div>
  );
};
