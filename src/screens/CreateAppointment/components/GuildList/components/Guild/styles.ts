import { BoxProps, TextProps } from "@shopify/restyle";
import { RFValue } from "react-native-responsive-fontsize";

import { Theme } from "../../../../../../theme";

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "s",
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
    usernameStyles,
    statusStyles,
  };
};
