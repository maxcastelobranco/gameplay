import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { MemberData } from "../index";
import { Box, Text } from "../../../theme";
import GradientImage from "../../../components/GradientImage";

import { useStyles } from "./styles";

const ICON_WIDTH = RFValue(60);
const ICON_HEIGHT = RFValue(60);

const Member: React.FC<MemberData> = ({ username, avatar_url, status }) => {
  const {
    containerStyles,
    contentContainerStyles,
    usernameStyles,
    statusContainerStyles,
    statusIndicatorStyles,
    statusStyles,
  } = useStyles();

  return (
    <Box {...containerStyles}>
      <GradientImage uri={avatar_url} width={ICON_WIDTH} height={ICON_HEIGHT} />
      <Box {...contentContainerStyles}>
        <Text {...usernameStyles}>{username}</Text>
        <Box {...statusContainerStyles}>
          <Box
            {...statusIndicatorStyles}
            backgroundColor={status === "online" ? "active" : "primary"}
          />
          <Text {...statusStyles}>{status}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Member;
