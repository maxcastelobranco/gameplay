import React, { useEffect } from "react";
import useDimensions from "@shopify/restyle/dist/hooks/useDimensions";
import { Alert, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { CommonActions } from "@react-navigation/native";

import { Box, Text } from "../../theme";
import Button from "../../components/Button";
import { AppNavigationProps } from "../../routes";
import { useAuthContext } from "../../context/auth";

import { useStyles } from "./styles";

const Login: React.FC<AppNavigationProps<"Login">> = ({ navigation }) => {
  const { width } = useDimensions();
  const { containerStyles, titleStyles, descriptionStyles } = useStyles();
  const { signIn, isLoading, user } = useAuthContext();

  const handleLogin = async () => {
    try {
      await signIn();
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  useEffect(() => {
    if (user !== null && !isLoading) {
      navigation.dispatch(
        CommonActions.navigate({
          name: "Home",
          params: {},
        })
      );
    }
  }, [isLoading, navigation, user]);

  return (
    <Box {...containerStyles}>
      <Image
        source={require("../../../assets/LoginIllustration.png")}
        style={{
          width,
          height: RFValue(360),
        }}
      />
      <Text
        {...titleStyles}
        style={{
          marginTop: RFValue(-84),
        }}
      >
        Connect and organize your gaming
      </Text>
      <Text {...descriptionStyles}>
        Create groups to play your favorite games with friends
      </Text>
      <Button
        title="Login with Discord"
        onPress={handleLogin}
        {...{ isLoading }}
      />
    </Box>
  );
};

export default Login;
