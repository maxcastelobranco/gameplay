import "react-native-gesture-handler";
import React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import LoadAssets from "./src/components/LoadAssets";
import theme from "./src/theme";
import { fonts } from "./assets/fonts";
import Background from "./src/components/Background";
import AppStackNavigator from "./src/routes";
import AuthProvider from "./src/context/auth";

export default function App() {
  const assets = [require("./assets/LoginIllustration.png")];

  return (
    <ThemeProvider {...{ theme }}>
      <BottomSheetModalProvider>
        <AuthProvider>
          <LoadAssets {...{ fonts, assets }}>
            <Background>
              <StatusBar style="light" hidden />
              <AppStackNavigator />
            </Background>
          </LoadAssets>
        </AuthProvider>
      </BottomSheetModalProvider>
    </ThemeProvider>
  );
}
