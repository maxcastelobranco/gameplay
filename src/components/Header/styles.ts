import { BoxProps, TextProps, useTheme } from "@shopify/restyle";
import { RFValue } from "react-native-responsive-fontsize";
import useDimensions from "@shopify/restyle/dist/hooks/useDimensions";
import { ViewStyle } from "react-native";

import { Theme } from "../../theme";

export const useStyles = () => {
  const { width } = useDimensions();
  const theme = useTheme<Theme>();

  const containerStyles: BoxProps<Theme> = {
    height: RFValue(84),
    width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "s",
  };
  const buttonStyles: ViewStyle = {
    padding: theme.spacing.s,
  };
  const titleStyles: TextProps<Theme> = {
    variant: "heading1",
    fontSize: RFValue(20),
  };

  return {
    containerStyles,
    titleStyles,
    buttonStyles,
  };
};
