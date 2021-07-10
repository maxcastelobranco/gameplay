import { BoxProps, TextProps } from "@shopify/restyle";
import { RFValue } from "react-native-responsive-fontsize";
import { ViewStyle } from "react-native";

import { Theme } from "../../theme";

export const useStyles = () => {
  const containerStyles: ViewStyle = {
    flex: 1,
  };
  const labelStyles: TextProps<Theme> = {
    variant: "heading1",
    fontSize: RFValue(20),
  };
  const contentContainerStyles: BoxProps<Theme> = {
    padding: "ms",
  };
  const pickServerContainerStyles: BoxProps<Theme> = {
    borderWidth: 1,
    borderColor: "secondary50",
    borderRadius: "default",
    mb: "s",
  };
  const pickServerButtonStyles: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
  };
  const textContainerStyles: BoxProps<Theme> = {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };
  const pickServerTextStyles: TextProps<Theme> = {
    variant: "heading1",
    fontSize: RFValue(20),
    mr: "s",
  };
  const timePickerContainerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    justifyContent: "space-between",
    pb: "s",
  };
  const inputContainerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };

  return {
    containerStyles,
    contentContainerStyles,
    labelStyles,
    pickServerContainerStyles,
    textContainerStyles,
    pickServerTextStyles,
    pickServerButtonStyles,
    timePickerContainerStyles,
    inputContainerStyles,
  };
};
