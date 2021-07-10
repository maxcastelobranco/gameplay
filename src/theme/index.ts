import { createBox, createText, createTheme } from "@shopify/restyle";
import { RFValue } from "react-native-responsive-fontsize";

const palette = {
  rustyRed: "#E51C44",
  rosewood: "#5C0A1B",
  iris100: "#0A1033",
  iris90: "#0D133D",
  iris80: "#0E1647",
  iris70: "#1B2565",
  iris60: "#3243BD",
  iris50: "#243189",
  iris40: "#1D2766",
  iris30: "#495BCC",
  aliceBlue: "#DDE3F0",
  wildBlueYonder: "#ABB1CC",
  oxfordBlue: "#0D133D",
  vividBurgundy: "#991F36",
  eerieBlack: "rgba(0,0,0,0.7)",
  darkPastelGreen: "#32BD50",
};

const theme = createTheme({
  colors: {
    primary: palette.rustyRed,
    primaryDark: palette.rosewood,
    secondary100: palette.iris100,
    secondary90: palette.iris90,
    secondary80: palette.iris80,
    secondary70: palette.iris70,
    secondary60: palette.iris60,
    secondary50: palette.iris50,
    secondary40: palette.iris40,
    secondary30: palette.iris30,
    heading: palette.aliceBlue,
    highlight: palette.wildBlueYonder,
    background: palette.oxfordBlue,
    button: palette.rustyRed,
    divider: palette.vividBurgundy,
    overlay: palette.eerieBlack,
    active: palette.darkPastelGreen,
  },
  spacing: {
    xxs: RFValue(4),
    xs: RFValue(8),
    s: RFValue(16),
    ms: RFValue(24),
    m: RFValue(28),
    ml: RFValue(32),
    l: RFValue(48),
    xl: RFValue(80),
    xxl: RFValue(96),
  },
  borderRadii: {
    small: RFValue(2),
    default: RFValue(8),
  },
  textVariants: {
    heading1: {
      fontFamily: "Rajdhani-Bold",
      fontSize: RFValue(40),
      color: "heading",
    },
    heading2: {
      fontFamily: "Rajdhani-Medium",
      fontSize: RFValue(24),
      color: "heading",
    },
    heading3: {
      fontFamily: "Inter-Bold",
      fontSize: RFValue(20),
      color: "heading",
    },
    text1: {
      fontFamily: "Inter-Bold",
      fontSize: RFValue(17),
    },
    text2: {
      fontFamily: "Inter-Medium",
      fontSize: RFValue(15),
    },
    text3: {
      fontFamily: "Inter-Regular",
      fontSize: RFValue(13),
    },
  },
  breakpoints: {},
  zIndices: {},
  shadows: {
    elevation2: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    elevation4: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    elevation6: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
  },
});

export type Colors = keyof typeof theme.colors;
export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
