import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@shopify/restyle";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

import { Theme } from "../../../../theme";

import { useStyles } from "./styles";

const AddButton: React.FC<RectButtonProps> = () => {
  const {
    colors: { heading },
  } = useTheme<Theme>();
  const { containerStyles } = useStyles();
  const navigation = useNavigation();
  return (
    <RectButton
      style={containerStyles}
      onPress={() => navigation.navigate("CreateAppointment")}
    >
      <Feather name="plus" size={RFValue(24)} color={heading} />
    </RectButton>
  );
};

export default AddButton;
