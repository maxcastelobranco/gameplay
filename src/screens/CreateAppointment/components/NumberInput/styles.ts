import { TextStyle, ViewStyle } from "react-native";
import { useTheme } from "@shopify/restyle";
import { RFValue } from "react-native-responsive-fontsize";

import { Theme } from "../../../../theme";

const INPUT_SIZE = RFValue(48);

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const gradientStyles: ViewStyle = {
    width: INPUT_SIZE,
    height: INPUT_SIZE,
    borderWidth: 1,
    borderColor: theme.colors.secondary70,
    borderRadius: theme.borderRadii.default,
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing.xs,
    marginRight: theme.spacing.xs,
  };
  const inputStyles: TextStyle = {
    width: INPUT_SIZE,
    height: INPUT_SIZE,
    padding: theme.spacing.xs,
    color: theme.colors.heading,
    ...theme.textVariants.text3,
  };

  return {
    inputStyles,
    gradientStyles,
  };
};
