import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { useTheme } from "@shopify/restyle";

import { Theme } from "../theme";

const Background: React.FC = ({ children }) => {
  const {
    colors: { secondary80, secondary100 },
  } = useTheme<Theme>();
  return (
    <LinearGradient
      colors={[secondary80, secondary100]}
      style={StyleSheet.absoluteFill}
    >
      {children}
    </LinearGradient>
  );
};

export default Background;
