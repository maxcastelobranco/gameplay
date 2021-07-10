import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import Login from "../screens/Login";
import Home, { AppointmentData } from "../screens/Home";
import AppointmentDetails from "../screens/AppointmentDetails";
import CreateAppointment from "../screens/CreateAppointment";
import { useAuthContext } from "../context/auth";

export type AppRoutes = {
  Login: undefined;
  Home: undefined;
  AppointmentDetails: AppointmentData;
  CreateAppointment: undefined;
};

const { Navigator, Screen } = createStackNavigator<AppRoutes>();

export interface AppNavigationProps<RouteName extends keyof AppRoutes> {
  navigation: StackNavigationProp<AppRoutes, RouteName>;
  route: RouteProp<AppRoutes, RouteName>;
}

const AppStackNavigator: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      {user === null ? (
        <Screen name="Login" component={Login} />
      ) : (
        <>
          <Screen name="Home" component={Home} />
          <Screen name="AppointmentDetails" component={AppointmentDetails} />
          <Screen name="CreateAppointment" component={CreateAppointment} />
        </>
      )}
    </Navigator>
  );
};

export default AppStackNavigator;
