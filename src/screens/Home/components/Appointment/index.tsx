import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";
import { useNavigation } from "@react-navigation/native";

import { Box, Text, Theme } from "../../../../theme";
import { AppointmentData } from "../../index";
import GradientImage from "../../../../components/GradientImage";
import Person from "../../../../components/svgs/Person";
import Calendar from "../../../../components/svgs/Calendar";
import { DISCORD_CDN } from "../../../../config/discordAuth";

import { useStyles } from "./styles";

const ICON_WIDTH = RFValue(64);
const ICON_HEIGHT = RFValue(68);

const Appointment: React.FC<AppointmentData> = ({
  id,
  guild,
  date,
  category,
  description,
}) => {
  const {
    colors: { primary, active },
  } = useTheme<Theme>();
  const {
    containerStyles,
    contentContainerStyles,
    guildNameStyles,
    dateStyles,
    categoryStyles,
    iconTextContainer,
    fieldOwnerTextStyles,
    rightSideContainerStyles,
  } = useStyles();
  const navigation = useNavigation();

  const uri = guild
    ? `${DISCORD_CDN}/icons/${guild.id}/${guild.icon}`
    : undefined;

  return (
    <RectButton
      style={containerStyles}
      onPress={() =>
        navigation.navigate("AppointmentDetails", {
          id,
          guild,
          date,
          category,
          description,
        })
      }
    >
      <GradientImage {...{ uri }} width={ICON_WIDTH} height={ICON_HEIGHT} />
      <Box {...contentContainerStyles}>
        <Box>
          <Text {...guildNameStyles}>{guild.name}</Text>
          <Box {...iconTextContainer}>
            <Calendar />
            <Text {...dateStyles}>{date}</Text>
          </Box>
        </Box>
        <Box {...rightSideContainerStyles}>
          <Text {...categoryStyles}>{category}</Text>
          <Box {...iconTextContainer}>
            <Person fill={guild.owner ? active : primary} />
            <Text
              {...fieldOwnerTextStyles}
              color={guild.owner ? "active" : "primary"}
            >
              {guild.owner ? "Host" : "Guest"}
            </Text>
          </Box>
        </Box>
      </Box>
    </RectButton>
  );
};

export default Appointment;
