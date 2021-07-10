import { BoxProps } from "@shopify/restyle";
import useDimensions from "@shopify/restyle/dist/hooks/useDimensions";

import { Theme } from "../../theme";

export const useStyles = () => {
  const { height } = useDimensions();
  const containerStyles: BoxProps<Theme> = {
    height,
    padding: "ms",
  };
  const headerStyles: BoxProps<Theme> = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return {
    containerStyles,
    headerStyles,
  };
};
