import { atom } from "jotai";

export const editorTextAtom = atom("");

type FontFamily = {
  label: string;
  value: string;
};

export const fontFamiliesAtom = atom<FontFamily[]>([
  { label: "Arial", value: "Arial, sans-serif" },
  { label: "Helvetica", value: "Helvetica, sans-serif" },
  { label: "Times New Roman", value: "Times New Roman, serif" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Courier New", value: "Courier New, monospace" },
  { label: "Verdana", value: "Verdana, sans-serif" },
  { label: "Tahoma", value: "Tahoma, sans-serif" },
  { label: "Trebuchet MS", value: "Trebuchet MS, sans-serif" },
  { label: "Arial Black", value: "Arial Black, sans-serif" },
  { label: "Impact", value: "Impact, sans-serif" },
  { label: "Comic Sans MS", value: "Comic Sans MS, cursive" },
]);

export const fontFamilyAtom = atom("Arial, sans-serif");

export const fontSizesAtom = atom([
  12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
]);

export const fontSizeAtom = atom(12);
