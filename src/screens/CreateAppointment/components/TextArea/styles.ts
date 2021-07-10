import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { useTheme } from "@shopify/restyle";
import { RFValue } from "react-native-responsive-fontsize";

import { Theme } from "../../../../theme";

const INPUT_HEIGHT = RFValue(96);

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const gradientStyles: ViewStyle = {
    width: "100%",
    height: INPUT_HEIGHT,
    borderWidth: 1,
    borderColor: theme.colors.secondary70,
    borderRadius: theme.borderRadii.default,
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing.xs,
    marginRight: theme.spacing.xs,
    marginBottom: theme.spacing.m,
  };
  const inputStyles: TextStyle = {
    ...StyleSheet.absoluteFillObject,
    ...theme.textVariants.text3,
    color: theme.colors.heading,
    padding: theme.spacing.s,
    paddingBottom: theme.spacing.l,
  };

  return {
    inputStyles,
    gradientStyles,
  };
};
