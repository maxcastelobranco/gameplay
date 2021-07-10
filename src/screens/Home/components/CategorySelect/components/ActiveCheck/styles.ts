import { BoxProps } from "@shopify/restyle";
import { RFValue } from "react-native-responsive-fontsize";

import { Theme } from "../../../../../../theme";

const CONTAINER_SIZE = RFValue(12);

export const useStyles = () => {
  const containerStyles: BoxProps<Theme> = {
    position: "absolute",
    top: 8,
    right: 8,
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
    borderRadius: "small",
    borderWidth: 1,
    borderColor: "secondary50",
  };

  return {
    containerStyles,
  };
};
