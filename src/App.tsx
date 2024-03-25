import "./App.css";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Editor } from "@/components/editor";
import { Previewer } from "@/components/previewer";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

export const App = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col space-y-2 fixed top-3 right-3">
        <ModeToggle />
      </div>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <Editor />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <Previewer />
        </ResizablePanel>
      </ResizablePanelGroup>
    </ThemeProvider>
  );
};
