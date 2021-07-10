import { BoxProps, TextProps, useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const containerStyles: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: theme.borderRadii.default,
    backgroundColor: theme.colors.button,
    marginHorizontal: theme.spacing.m,
  };
  const iconContainerStyles: BoxProps<Theme> = {
    padding: "ms",
    borderRightColor: "divider",
    borderRightWidth: 1,
  };
  const textContainerStyles: BoxProps<Theme> = {
    flex: 1,
    alignItems: "center",
  };
  const buttonTextStyles: TextProps<Theme> = {
    variant: "text2",
    color: "heading",
  };

  return {
    containerStyles,
    textContainerStyles,
    iconContainerStyles,
    buttonTextStyles,
  };
};
