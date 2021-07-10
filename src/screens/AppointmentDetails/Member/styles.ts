import { BoxProps, TextProps } from "@shopify/restyle";
import { RFValue } from "react-native-responsive-fontsize";

import { Theme } from "../../../theme";

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "ms",
    paddingRight: "ms",
  };
  const contentContainerStyles: BoxProps<Theme> = {
    flex: 1,
    height: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "secondary70",
    borderBottomRightRadius: "small",
    borderBottomLeftRadius: "small",
  };
  const statusContainerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
  };
  const statusIndicatorStyles: BoxProps<Theme> = {
    width: RFValue(8),
    height: RFValue(8),
    borderRadius: "default",
    mr: "xs",
  };
  const usernameStyles: TextProps<Theme> = {
    variant: "heading1",
    fontSize: RFValue(18),
    textTransform: "capitalize",
  };
  const statusStyles: TextProps<Theme> = {
    variant: "text1",
    color: "highlight",
    textTransform: "capitalize",
  };

  return {
    containerStyles,
    contentContainerStyles,
    statusContainerStyles,
    statusIndicatorStyles,
    usernameStyles,
    statusStyles,
  };
};
