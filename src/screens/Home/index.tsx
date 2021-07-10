import React, { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { Box, Text } from "../../theme";
import ListHeader from "../../components/ListHeader";
import { AppNavigationProps } from "../../routes";
import Background from "../../components/Background";

import { useStyles } from "./styles";
import Profile from "./components/Profile";
import AddButton from "./components/AddButton";
import CategorySelect from "./components/CategorySelect";
import { CategoryTitles } from "./components/CategorySelect/categories";
import Appointment from "./components/Appointment";

export interface GuildData {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}
export interface AppointmentData {
  id: string;
  guild: GuildData;
  category: CategoryTitles;
  date: string;
  description: string;
}

const Home: React.FC<AppNavigationProps<"Home">> = () => {
  const { containerStyles, headerStyles } = useStyles();
  const [category, setCategory] = useState<CategoryTitles | null>(null);
  const [appointments, setAppointments] = useState<AppointmentData[]>([]);

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem("@gameplay:appointments").then((response) => {
        if (response) {
          const parsedAppointments: AppointmentData[] = JSON.parse(response);

          if (category) {
            setAppointments(
              parsedAppointments.filter(
                (prevAppointment) => prevAppointment.category === category
              )
            );
          } else {
            setAppointments(parsedAppointments);
          }
        }
      });
    }, [category])
  );

  const ListEmptyComponent = () => {
    return (
      <Box padding="s" alignItems="center" justifyContent="center">
        <Text variant="heading1">¯\_(ツ)_/¯</Text>
      </Box>
    );
  };

  return (
    <Box {...containerStyles}>
      <Box {...headerStyles}>
        <Profile />
        <AddButton />
      </Box>
      <CategorySelect {...{ category, setCategory }} />
      <ListHeader title="Scheduled games" total={appointments.length} />
      <Box height="60%">
        <FlatList
          data={appointments}
          renderItem={({ item }) => <Appointment {...item} />}
          keyExtractor={({ id }) => id}
          {...{ ListEmptyComponent }}
        />
      </Box>
    </Box>
  );
};

export default Home;
