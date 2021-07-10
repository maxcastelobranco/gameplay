import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@shopify/restyle";

import { Theme } from "../../theme";

import { useStyles } from "./styles";

interface AvatarProps {
  uri?: string;
  width: number;
  height: number;
}

const GradientImage: React.FC<AvatarProps> = ({ uri, width, height }) => {
  const {
    colors: { secondary70, secondary100 },
  } = useTheme<Theme>();
  const { containerStyles, avatarStyles } = useStyles();

  return (
    <LinearGradient
      colors={[secondary100, secondary70]}
      style={[
        containerStyles,
        {
          width,
          height,
        },
      ]}
      start={[0, 1]}
      end={[1, 0]}
    >
      {uri && (
        <Image
          resizeMode="cover"
          source={{
            uri,
          }}
          style={[
            avatarStyles,
            {
              width: width * 0.9,
              height: height * 0.9,
            },
          ]}
        />
      )}
    </LinearGradient>
  );
};

export default GradientImage;
