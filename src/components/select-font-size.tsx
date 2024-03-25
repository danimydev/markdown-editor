import { HTMLAttributes } from "react";
import { useAtom } from "jotai";

import { fontSizeAtom, fontSizesAtom } from "../atoms";

export const SelectFontSize: React.FC<HTMLAttributes<HTMLSelectElement>> = (
  props,
) => {
  const [fontSizes] = useAtom(fontSizesAtom);
  const [, setFontSize] = useAtom(fontSizeAtom);

  return (
    <select {...props} onChange={(e) => setFontSize(parseInt(e.target.value))}>
      {fontSizes.map((size) => (
        <option value={size}>{size}</option>
      ))}
    </select>
  );
};
