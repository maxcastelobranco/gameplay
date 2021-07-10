import React from "react";
import { TextInput } from "react-native";
import { ControllerRenderProps } from "react-hook-form";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@shopify/restyle";

import { Theme } from "../../../../theme";

import { useStyles } from "./styles";

interface NumberInputProps {
  field: ControllerRenderProps;
}

const NumberInput: React.FC<NumberInputProps> = ({
  field: { onChange, onBlur, value },
}) => {
  const {
    colors: { secondary100, secondary70 },
  } = useTheme<Theme>();
  const { inputStyles, gradientStyles } = useStyles();

  return (
    <LinearGradient
      colors={[secondary100, secondary70]}
      style={gradientStyles}
      start={[0, 1]}
      end={[1, 0]}
    >
      <TextInput
        {...{ onBlur, value }}
        onChangeText={onChange}
        style={inputStyles}
        keyboardType="numeric"
      />
    </LinearGradient>
  );
};

export default NumberInput;
