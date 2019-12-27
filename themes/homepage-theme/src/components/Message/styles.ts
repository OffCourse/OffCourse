import { SxStyleProp } from "theme-ui";

export const messageStyles: SxStyleProp = {
  fontFamily: "heading",
  boxSizing: "border-box",
  display: "flex",
  flex: 1,
  color: "error",
  pt: 2,
  px: 4,
  pb: 2
};

export const basicMessageStyles: SxStyleProp = {
  ...messageStyles,
  pt: 0
};
