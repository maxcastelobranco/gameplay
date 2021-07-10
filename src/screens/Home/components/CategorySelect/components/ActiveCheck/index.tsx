import React from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useTheme } from "@shopify/restyle";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { mix, useSpring, useTiming } from "react-native-redash";

import { Box, Theme } from "../../../../../../theme";

import { useStyles } from "./styles";

interface ActiveCheckProps {
  isActive: boolean;
}

const ActiveCheck: React.FC<ActiveCheckProps> = ({ isActive }) => {
  const {
    colors: { primary, primaryDark },
  } = useTheme<Theme>();
  const { containerStyles } = useStyles();

  const springTransition = useSpring(isActive);
  const timingTransition = useTiming(isActive);

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = mix(springTransition.value, 45, 0);
    const scale = mix(springTransition.value, 0, 1);
    const opacity = mix(timingTransition.value, 0, 1);

    return {
      opacity,
      transform: [{ rotate: `${rotate}deg` }, { scale }],
    };
  });

  return (
    <Box {...containerStyles}>
      <Animated.View style={[StyleSheet.absoluteFillObject, animatedStyle]}>
        <LinearGradient
          style={[StyleSheet.absoluteFillObject]}
          colors={[primaryDark, primary]}
        />
      </Animated.View>
    </Box>
  );
};

export default ActiveCheck;
