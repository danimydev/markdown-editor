import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const promptMdFile = () => {
  const input = document.createElement("input");
  input.type = "file";
  input.multiple = false;
  input.accept = ".md";
  return new Promise((resolves, rejects) => {
    input.onchange = () => {
      if (!input.files) {
        return rejects("No .md file selected");
      }
      const file = Array.from(input.files).at(0);
      if (!file) {
        return rejects("No .md file selected");
      }
      return resolves(file);
    };
    input.click();
  }) as Promise<File>;
};
