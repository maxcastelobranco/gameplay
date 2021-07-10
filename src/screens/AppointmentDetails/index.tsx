import React from "react";
import { FlatList, ImageBackground } from "react-native";
import useDimensions from "@shopify/restyle/dist/hooks/useDimensions";
import { RFValue } from "react-native-responsive-fontsize";

import { Box, Text } from "../../theme";
import { AppNavigationProps } from "../../routes";
import Header from "../../components/Header";
import ListHeader from "../../components/ListHeader";
import Button from "../../components/Button";
import { DISCORD_CDN } from "../../config/discordAuth";

import Member from "./Member";
import { useStyles } from "./styles";

const members: MemberData[] = [
  {
    id: "1",
    username: "potato_man",
    avatar_url: "https://github.com/maxcastelobranco.png",
    status: "online",
  },
];
export interface MemberData {
  id: string;
  username: string;
  avatar_url: string;
  status: "online" | "offline";
}
const AppointmentDetails: React.FC<AppNavigationProps<"AppointmentDetails">> =
  ({
    route: {
      params: {
        guild: { id, icon, name },
        description,
      },
    },
  }) => {
    const {
      containerStyles,
      titleStyles,
      descriptionStyles,
      bannerStyles,
      contentContainerStyles,
    } = useStyles();
    const { width } = useDimensions();

    const uri = `${DISCORD_CDN}/icons/${id}/${icon}`;

    return (
      <Box {...containerStyles}>
        <Header title="Details" showShareIcon />
        <ImageBackground
          source={{
            uri,
          }}
          style={[
            bannerStyles,
            {
              width,
              height: RFValue(250),
            },
          ]}
        >
          <Text {...titleStyles}>{name}</Text>
          <Text {...descriptionStyles}>{description}</Text>
        </ImageBackground>
        <Box {...contentContainerStyles}>
          <ListHeader title="Players" total={99} />
          <FlatList
            data={members}
            renderItem={({ item }) => <Member {...item} />}
          />
          <Button title="Start Match" onPress={() => console.log("titties")} />
        </Box>
      </Box>
    );
  };

export default AppointmentDetails;
