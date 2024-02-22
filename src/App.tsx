import { useEffect } from "react";
import { appWindow } from "@tauri-apps/api/window";
import { useAtom } from "jotai";

import { themeAtom, windowSizeAtom } from "./atoms";

import { Render } from "./components/Render";
import { MarkdownEditor } from "./components/MarkdownEditor";

function App() {
  const [, setTheme] = useAtom(themeAtom);
  const [, setWindowSize] = useAtom(windowSizeAtom);

  useEffect(() => {
    const setAppWindowProps = async () => {
      const { height, width } = await appWindow.innerSize();
      setWindowSize({ height, width });

      const theme = await appWindow.theme();
      if (theme) {
        if (theme === "dark") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }
    };

    void setAppWindowProps();

    appWindow.onResized(({ payload: { width, height } }) => {
      setWindowSize({ width, height });
    });
    appWindow.onThemeChanged(({payload: theme}) => {
      setTheme(theme);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start"
      }}
    >
      <MarkdownEditor />
      <Render />
    </div>
  );
}

export default App;
