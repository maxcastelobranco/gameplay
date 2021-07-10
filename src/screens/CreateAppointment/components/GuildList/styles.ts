import { ViewStyle } from "react-native";
import { useTheme } from "@shopify/restyle";

import { Theme } from "../../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();

  const gradientStyles: ViewStyle = {
    flex: 1,
    paddingHorizontal: theme.spacing.m,
  };

  return {
    gradientStyles,
  };
};
