import React, { useCallback, useMemo, useRef, useState } from "react";
import uuid from "react-native-uuid";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { format } from "date-fns";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";

import { Box, Text } from "../../theme";
import { AppNavigationProps } from "../../routes";
import Header from "../../components/Header";
import CategorySelect from "../Home/components/CategorySelect";
import { CategoryTitles } from "../Home/components/CategorySelect/categories";
import GradientImage from "../../components/GradientImage";
import ChevronRight from "../../components/svgs/ChevronRight";
import Button from "../../components/Button";
import { AppointmentData, GuildData } from "../Home";
import { DISCORD_CDN } from "../../config/discordAuth";

import { useStyles } from "./styles";
import NumberInput from "./components/NumberInput";
import TextArea from "./components/TextArea";
import GuildList from "./components/GuildList";

interface FormValues {
  month: number;
  day: number;
  hour: number;
  minute: number;
  description: string;
}

const CreateAppointment: React.FC<AppNavigationProps<"CreateAppointment">> = ({
  navigation,
}) => {
  const [category, setCategory] = useState<CategoryTitles | null>(null);
  const {
    containerStyles,
    contentContainerStyles,
    labelStyles,
    pickServerContainerStyles,
    textContainerStyles,
    pickServerTextStyles,
    pickServerButtonStyles,
    timePickerContainerStyles,
    inputContainerStyles,
  } = useStyles();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["85%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const [guild, setGuild] = useState<GuildData | null>(null);

  const { control, handleSubmit } = useForm<FormValues>({
    criteriaMode: "all",
    reValidateMode: "onChange",
  });
  const onSubmit: SubmitHandler<FormValues> = async ({
    month,
    day,
    hour,
    minute,
    description,
  }) => {
    if (!category || !guild) {
      return;
    }
    const currentYear = new Date().getFullYear();
    const appointment: AppointmentData = {
      id: uuid.v4() as string,
      guild,
      category,
      description,
      date: format(
        new Date(currentYear, month - 1, day, hour, minute),
        "M/d' at 'H:mm"
      ),
    };
    const prevAppointments = await AsyncStorage.getItem(
      "@gameplay:appointments"
    );

    if (prevAppointments) {
      await AsyncStorage.setItem(
        "@gameplay:appointments",
        JSON.stringify([...JSON.parse(prevAppointments), appointment])
      );
    } else {
      await AsyncStorage.setItem(
        "@gameplay:appointments",
        JSON.stringify([appointment])
      );
    }
    navigation.dispatch(
      CommonActions.navigate({
        name: "Home",
        params: {},
      })
    );
  };

  const uri = guild
    ? `${DISCORD_CDN}/icons/${guild.id}/${guild.icon}`
    : undefined;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="position" style={containerStyles}>
        <Header title="Create Appointment" />
        <Box {...contentContainerStyles}>
          <Text {...labelStyles}>Category</Text>
          <CategorySelect {...{ category, setCategory }} showCheckAnimation />

          <Box {...pickServerContainerStyles}>
            <RectButton
              style={pickServerButtonStyles}
              onPress={handlePresentModalPress}
            >
              <GradientImage
                {...{ uri }}
                width={RFValue(64)}
                height={RFValue(68)}
              />
              <Box {...textContainerStyles}>
                <Text {...pickServerTextStyles}>
                  {guild ? guild.name : "Pick a Server"}
                </Text>
                <ChevronRight />
              </Box>
            </RectButton>
          </Box>

          <Box {...timePickerContainerStyles}>
            <Box>
              <Text {...labelStyles}>Day and Month</Text>
              <Box {...inputContainerStyles}>
                <Controller
                  {...{ control }}
                  name="month"
                  defaultValue=""
                  rules={{ required: true, min: 1, max: 12 }}
                  render={({ field }) => <NumberInput {...{ field }} />}
                />
                <Text {...labelStyles} mr="xs">
                  /
                </Text>
                <Controller
                  {...{ control }}
                  name="day"
                  defaultValue=""
                  rules={{ required: true, min: 1, max: 31 }}
                  render={({ field }) => <NumberInput {...{ field }} />}
                />
              </Box>
            </Box>
            <Box>
              <Text {...labelStyles}>Hour and minute</Text>
              <Box {...inputContainerStyles}>
                <Controller
                  {...{ control }}
                  name="hour"
                  defaultValue=""
                  rules={{ required: true, min: 0, max: 23 }}
                  render={({ field }) => <NumberInput {...{ field }} />}
                />
                <Text {...labelStyles} mr="xs">
                  :
                </Text>
                <Controller
                  {...{ control }}
                  name="minute"
                  defaultValue=""
                  rules={{ required: true, min: 0, max: 59 }}
                  render={({ field }) => <NumberInput {...{ field }} />}
                />
              </Box>
            </Box>
          </Box>

          <Text {...labelStyles}>Description</Text>
          <Controller
            {...{ control }}
            name="description"
            defaultValue=""
            rules={{ required: true, minLength: 2, maxLength: 100 }}
            render={({ field }) => <TextArea {...{ field }} />}
          />

          <Button title="Create Appointment" onPress={handleSubmit(onSubmit)} />
        </Box>
        <BottomSheetModal ref={bottomSheetModalRef} {...{ snapPoints }}>
          <GuildList {...{ bottomSheetModalRef, guild, setGuild }} />
        </BottomSheetModal>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default CreateAppointment;
