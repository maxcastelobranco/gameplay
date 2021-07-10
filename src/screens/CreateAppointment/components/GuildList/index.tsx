import React from "react";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useTheme } from "@shopify/restyle";
import { LinearGradient } from "expo-linear-gradient";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import { Box, Theme } from "../../../../theme";
import { GuildData } from "../../../Home";
import { useGuilds } from "../../../../hooks/useGuilds";
import Background from "../../../../components/Background";
import Loading from "../../../../components/Loading";

import Guild from "./components/Guild";
import { useStyles } from "./styles";

interface GuildListProps {
  bottomSheetModalRef: React.RefObject<BottomSheetModalMethods>;
  guild: GuildData | null;
  setGuild: React.Dispatch<React.SetStateAction<GuildData | null>>;
}

const GuildList: React.FC<GuildListProps> = (props) => {
  const {
    colors: { secondary100, secondary70 },
  } = useTheme<Theme>();
  const { gradientStyles } = useStyles();
  const { guilds } = useGuilds();

  if (!guilds) {
    return (
      <Background>
        <Box flex={1} alignItems="center" justifyContent="center">
          <Loading />
        </Box>
      </Background>
    );
  }

  return (
    <LinearGradient colors={[secondary70, secondary100]} style={gradientStyles}>
      <BottomSheetFlatList
        data={guilds}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Guild {...item} {...props} />}
      />
    </LinearGradient>
  );
};

export default GuildList;
