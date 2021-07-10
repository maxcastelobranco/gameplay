import { useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { Theme } from "../../../../theme";

const CONTAINER_SIZE = RFValue(48);

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const containerStyles: ViewStyle = {
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
    borderRadius: theme.borderRadii.default,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  };
  return {
    containerStyles,
  };
};
