import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";
import { ViewStyle } from "react-native";

import { Box, Text, Theme } from "../../theme";
import Discord from "../svgs/Discord";
import Loading from "../Loading";

import { useStyles } from "./styles";

interface ButtonProps {
  title: string;
  showIcon?: boolean;
  onPress(): void;
  extraStyles?: ViewStyle;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  showIcon = true,
  onPress,
  extraStyles,
  isLoading = false,
}) => {
  const {
    containerStyles,
    buttonTextStyles,
    textContainerStyles,
    iconContainerStyles,
  } = useStyles();
  const theme = useTheme<Theme>();
  return (
    <RectButton
      {...{ onPress }}
      style={[
        containerStyles,
        {
          alignSelf: "flex-end",
          padding: showIcon ? 0 : theme.spacing.ms,
        },
        extraStyles,
      ]}
    >
      {showIcon && (
        <Box {...iconContainerStyles}>
          <Discord />
        </Box>
      )}
      <Box {...textContainerStyles}>
        {isLoading ? (
          <Loading color="highlight" />
        ) : (
          <Text {...buttonTextStyles}>{title}</Text>
        )}
      </Box>
    </RectButton>
  );
};

export default Button;
