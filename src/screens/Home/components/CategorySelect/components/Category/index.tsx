import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@shopify/restyle";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Pressable } from "react-native";

import { Text, Theme } from "../../../../../../theme";
import { CategorySelectProps } from "../../index";
import { CategoryTitles } from "../../categories";
import ActiveCheck from "../ActiveCheck";

import { useStyles } from "./styles";

interface CategoryProps extends CategorySelectProps {
  title: CategoryTitles;
  svg: JSX.Element;
}

const Category: React.FC<CategoryProps> = ({
  title,
  svg,
  category,
  setCategory,
  showCheckAnimation,
}) => {
  const {
    colors: { secondary50, secondary60, secondary70, secondary80 },
  } = useTheme<Theme>();
  const { containerStyles, categoryTitleStyles, gradientStyles } = useStyles();

  const isActive = category === title;

  const contentAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isActive ? 1 : 0.4),
      transform: [
        {
          scale: withSpring(isActive ? 1.1 : 1),
        },
      ],
    };
  });
  const toggleActiveCategory = () => {
    if (isActive) {
      setCategory(null);
    } else {
      setCategory(title);
    }
  };

  return (
    <LinearGradient colors={[secondary60, secondary70]} style={gradientStyles}>
      <Pressable onPress={toggleActiveCategory}>
        <LinearGradient
          colors={[secondary50, secondary80]}
          style={containerStyles}
          start={[0, 1]}
          end={[1, 0]}
        >
          {showCheckAnimation && <ActiveCheck {...{ isActive }} />}
          <Animated.View style={contentAnimatedStyle}>
            {svg}
            <Text {...categoryTitleStyles}>{title}</Text>
          </Animated.View>
        </LinearGradient>
      </Pressable>
    </LinearGradient>
  );
};

export default Category;
