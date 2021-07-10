import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

import { Box, Text } from "../../../../../../theme";
import GradientImage from "../../../../../../components/GradientImage";
import { GuildData } from "../../../../../Home";
import ChevronRight from "../../../../../../components/svgs/ChevronRight";
import { DISCORD_CDN } from "../../../../../../config/discordAuth";

import { useStyles } from "./styles";

const ICON_WIDTH = RFValue(60);
const ICON_HEIGHT = RFValue(60);
const CHEVRON_SIZE = RFValue(16);

interface GuildProps extends GuildData {
  setGuild: React.Dispatch<React.SetStateAction<GuildData | null>>;
  bottomSheetModalRef: React.RefObject<BottomSheetModalMethods>;
}

const Guild: React.FC<GuildProps> = ({
  id,
  name,
  icon,
  owner,
  setGuild,
  bottomSheetModalRef,
}) => {
  const {
    containerStyles,
    contentContainerStyles,
    usernameStyles,
    statusStyles,
  } = useStyles();
  const currentGuild: GuildData = {
    id,
    name,
    icon,
    owner,
  };

  const handlePress = () => {
    setGuild((prevState) => {
      if (prevState?.id === currentGuild.id) {
        return null;
      }
      return currentGuild;
    });
    bottomSheetModalRef.current?.dismiss();
  };

  const uri = `${DISCORD_CDN}/icons/${id}/${icon}`;

  return (
    <RectButton onPress={handlePress}>
      <Box {...containerStyles}>
        <GradientImage {...{ uri }} width={ICON_WIDTH} height={ICON_HEIGHT} />
        <Box {...contentContainerStyles}>
          <Text {...usernameStyles}>{name}</Text>
          <Text {...statusStyles}>{owner ? "Owner" : "Guest"}</Text>
        </Box>
        <ChevronRight width={CHEVRON_SIZE} height={CHEVRON_SIZE} />
      </Box>
    </RectButton>
  );
};

export default Guild;
