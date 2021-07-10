import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { Box, Text } from "../../../../theme";
import GradientImage from "../../../../components/GradientImage";
import { useAuthContext } from "../../../../context/auth";

import { useStyles } from "./styles";

const AVATAR_SIZE = RFValue(64);

const Profile: React.FC = () => {
  const { containerStyles, helloStyles, greetingStyles } = useStyles();
  const { user } = useAuthContext();

  return (
    <Box {...containerStyles}>
      <GradientImage
        uri={user?.avatar}
        width={AVATAR_SIZE}
        height={AVATAR_SIZE}
      />
      <Box>
        <Text {...helloStyles}>
          Hello, <Text fontFamily="Rajdhani-Bold">{user?.username}</Text>
        </Text>
        <Text {...greetingStyles}>Tonight we play for the win.</Text>
      </Box>
    </Box>
  );
};

export default Profile;
