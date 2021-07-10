import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@shopify/restyle";
import { useNavigation } from "@react-navigation/native";

import { Box, Text, Theme } from "../../theme";
import ArrowBack from "../svgs/ArrowBack";
import Share from "../svgs/Share";

import { useStyles } from "./styles";

interface HeaderProps {
  title: string;
  showShareIcon?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showShareIcon }) => {
  const {
    colors: { secondary40, secondary80 },
  } = useTheme<Theme>();
  const { containerStyles, titleStyles, buttonStyles } = useStyles();
  const navigation = useNavigation();

  return (
    <LinearGradient colors={[secondary40, secondary80]}>
      <Box {...containerStyles}>
        <RectButton onPress={navigation.goBack} style={buttonStyles}>
          <ArrowBack />
        </RectButton>
        <Text {...titleStyles}>{title}</Text>
        {showShareIcon ? (
          <RectButton style={buttonStyles}>
            <Share />
          </RectButton>
        ) : (
          <Box width={48} style={buttonStyles} />
        )}
      </Box>
    </LinearGradient>
  );
};

export default Header;
