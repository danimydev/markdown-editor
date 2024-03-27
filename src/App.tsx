import "./App.css";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Editor } from "@/components/editor";
import { Previewer } from "@/components/previewer";
import { ThemeProvider } from "@/components/theme-provider";
import { Controls } from "@/components/controls";

export const App = () => {
  return (
    <ThemeProvider>
      <Controls />
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
