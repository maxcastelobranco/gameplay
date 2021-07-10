import { BoxProps, TextProps, useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { Theme } from "../../../../theme";

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const containerStyles: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: theme.spacing.s,
    paddingRight: theme.spacing.m,
  };
  const contentContainerStyles: BoxProps<Theme> = {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "secondary70",
    borderBottomRightRadius: "small",
    borderBottomLeftRadius: "small",
  };
  const guildNameStyles: TextProps<Theme> = {
    variant: "heading1",
    fontSize: RFValue(18),
    mb: "xs",
  };
  const dateStyles: TextProps<Theme> = {
    variant: "text2",
    color: "heading",
    ml: "xs",
  };
  const rightSideContainerStyles: BoxProps<Theme> = {
    alignItems: "flex-end",
  };
  const categoryStyles: TextProps<Theme> = {
    variant: "text2",
    color: "highlight",
    mb: "xs",
  };
  const iconTextContainer: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
  };
  const fieldOwnerTextStyles: TextProps<Theme> = {
    variant: "text2",
    color: "heading",
    ml: "xs",
  };
  return {
    containerStyles,
    contentContainerStyles,
    guildNameStyles,
    dateStyles,
    categoryStyles,
    iconTextContainer,
    fieldOwnerTextStyles,
    rightSideContainerStyles,
  };
};
