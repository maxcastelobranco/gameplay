import { BoxProps, TextProps } from "@shopify/restyle";

import { Theme } from "../../../../theme";

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
  };
  const helloStyles: TextProps<Theme> = {
    variant: "heading2",
  };
  const greetingStyles: TextProps<Theme> = {
    variant: "text3",
    color: "heading",
  };

  return {
    containerStyles,
    helloStyles,
    greetingStyles,
  };
};
