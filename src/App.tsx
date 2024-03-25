import { useAtom } from "jotai";
import "./App.css";

import { fontFamilyAtom, fontSizeAtom } from "./atoms";

import { Editor } from "./components/editor";
import { Previewer } from "./components/previewer";

export const App = () => {
  const [fontFamily] = useAtom(fontFamilyAtom);
  const [fontSize] = useAtom(fontSizeAtom);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflowY: "hidden",
        display: "flex",
        alignItems: "start",
        justifyContent: "start",
      }}
    >
      <Editor
        style={{
          fontFamily: fontFamily,
          fontSize: fontSize,
          resize: "vertical",
          width: "50%",
          height: "100%",
          padding: 5,
        }}
      />
      <div
        style={{
          fontFamily: fontFamily,
          fontSize: fontSize,
          resize: "vertical",
          width: "50%",
          height: "100%",
          padding: 5,
          overflowY: "scroll",
        }}
      >
        <Previewer />
      </div>
    </div>
  );
};
