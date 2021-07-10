import { useTheme } from "@shopify/restyle";
import { ImageStyle, ViewStyle } from "react-native";

import { Theme } from "../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const containerStyles: ViewStyle = {
    borderRadius: theme.borderRadii.default,
    marginRight: theme.spacing.ms,
    alignItems: "center",
    justifyContent: "center",
  };
  const avatarStyles: ImageStyle = {
    borderRadius: theme.borderRadii.default,
  };
  return {
    containerStyles,
    avatarStyles,
  };
};
