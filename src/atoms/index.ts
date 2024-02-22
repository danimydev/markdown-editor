import { atom } from "jotai";

export const markdownTextAtom = atom("");

export const windowSizeAtom = atom({
  width: 0,
  height: 0,
});

export const themeAtom = atom("dark");
