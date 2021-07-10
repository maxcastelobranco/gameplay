import { BoxProps, TextProps, useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Theme } from "../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const containerStyles: BoxProps<Theme> = {
    flex: 1,
  };
  const titleStyles: TextProps<Theme> = {
    variant: "heading1",
    textAlign: "center",
  };
  const bannerStyles: ViewStyle = {
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: theme.spacing.m,
  };
  const descriptionStyles: TextProps<Theme> = {
    variant: "text2",
    color: "heading",
  };
  const contentContainerStyles: BoxProps<Theme> = {
    flex: 1,
    padding: "m",
  };

  return {
    containerStyles,
    bannerStyles,
    titleStyles,
    descriptionStyles,
    contentContainerStyles,
  };
};
