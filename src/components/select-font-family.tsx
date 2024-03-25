import { HTMLAttributes } from "react";
import { useAtom } from "jotai";

import { fontFamiliesAtom, fontFamilyAtom } from "../atoms";

export const SelectFontFamily: React.FC<HTMLAttributes<HTMLSelectElement>> = (
  props,
) => {
  const [fontFamilies] = useAtom(fontFamiliesAtom);
  const [, setFontFamily] = useAtom(fontFamilyAtom);

  return (
    <select {...props} onChange={(e) => setFontFamily(e.target.value)}>
      {fontFamilies.map((f) => (
        <option value={f.value}>{f.label}</option>
      ))}
    </select>
  );
};
