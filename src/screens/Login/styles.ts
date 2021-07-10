import { BoxProps, TextProps } from "@shopify/restyle";

import { Theme } from "../../theme";

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  };
  const titleStyles: TextProps<Theme> = {
    variant: "heading1",
    textAlign: "center",
  };
  const descriptionStyles: TextProps<Theme> = {
    variant: "text2",
    color: "heading",
    textAlign: "center",
    paddingHorizontal: "l",
  };

  return {
    containerStyles,
    titleStyles,
    descriptionStyles,
  };
};
