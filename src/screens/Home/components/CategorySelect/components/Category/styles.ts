import { ViewStyle } from "react-native";
import { TextProps, useTheme } from "@shopify/restyle";
import { RFValue } from "react-native-responsive-fontsize";
import useDimensions from "@shopify/restyle/dist/hooks/useDimensions";

import { Theme } from "../../../../../../theme";

const CATEGORY_HEIGHT = RFValue(120);

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const { width } = useDimensions();

  const CATEGORY_WIDTH = width * 0.3;

  const gradientStyles: ViewStyle = {
    width: CATEGORY_WIDTH * 1.05,
    height: CATEGORY_HEIGHT * 1.05,
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing.s,
    marginVertical: theme.spacing.m,
    borderRadius: theme.borderRadii.default,
  };
  const containerStyles: ViewStyle = {
    width: CATEGORY_WIDTH,
    height: CATEGORY_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.borderRadii.default,
  };
  const categoryTitleStyles: TextProps<Theme> = {
    variant: "heading1",
    fontSize: RFValue(16),
    marginTop: "s",
  };

  return {
    containerStyles,
    categoryTitleStyles,
    gradientStyles,
  };
};
