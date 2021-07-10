import { BoxProps, TextProps } from "@shopify/restyle";
import { RFValue } from "react-native-responsive-fontsize";

import { Theme } from "../../theme";

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const titleStyles: TextProps<Theme> = {
    variant: "heading1",
    fontSize: RFValue(18),
  };
  const totalStyles: TextProps<Theme> = {
    variant: "text3",
    color: "highlight",
  };

  return {
    containerStyles,
    titleStyles,
    totalStyles,
  };
};
