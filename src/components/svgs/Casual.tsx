import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const Casual: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={42} height={48} viewBox="0 0 42 48" fill="none" {...props}>
      <Path
        d="M39.876 25.112l-1.99.553v5.626c0 .858-.064 1.715-.194 2.564l1.716-.704a4.182 4.182 0 001.884-1.536 4.16 4.16 0 00.708-2.32v-2.576a1.663 1.663 0 00-.662-1.329 1.676 1.676 0 00-1.462-.278z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M4.112 31.291v-5.626l-1.988-.553a1.68 1.68 0 00-1.95.865c-.114.23-.174.484-.174.742v2.576c0 .826.246 1.633.707 2.32A4.183 4.183 0 002.59 33.15l1.716.704a16.862 16.862 0 01-.194-2.563z"
        fill="url(#prefix__paint1_linear)"
      />
      <Path
        d="M31.03 14.003A39.42 39.42 0 0121 15.456a39.42 39.42 0 01-10.03-1.453c-.734 7.447-6.858 11.662-6.858 11.662v5.626A16.797 16.797 0 009.1 43.113 16.92 16.92 0 0021 48a16.92 16.92 0 0011.9-4.887 16.797 16.797 0 004.988-11.822v-5.626s-6.124-4.215-6.857-11.662z"
        fill="url(#prefix__paint2_linear)"
      />
      <Path
        d="M21 15.456a39.416 39.416 0 01-10.03-1.453c-.734 7.447-6.858 11.662-6.858 11.662S-3.615 5.919 10.429 5.33c0 0 2.827-9.275 18.655-3.358 15.388 5.752 10.614 20.57 8.804 23.692 0 0-6.125-4.215-6.857-11.662A39.416 39.416 0 0121 15.456z"
        fill="#E61C44"
      />
      <Path
        d="M10.062 33.855a11.19 11.19 0 003.961 6.213A11.261 11.261 0 0021 42.488c2.533 0 4.991-.852 6.977-2.42a11.19 11.19 0 003.96-6.213H10.063z"
        fill="#495BCC"
      />
      <Path
        d="M29.074 39.068a11.216 11.216 0 01-8.071 3.42 11.245 11.245 0 01-8.072-3.416s3.005-1.651 8.073-1.651c4.914 0 7.89 1.55 8.07 1.647z"
        fill="#E61C44"
      />
      <Path
        d="M11.95 26.189a.734.734 0 01-.676-.45.727.727 0 01.158-.795 4.852 4.852 0 016.283 0 .728.728 0 01-.518 1.238.733.733 0 01-.515-.204 3.415 3.415 0 00-4.212-.004.731.731 0 01-.52.215zM30.05 26.189a.73.73 0 01-.515-.209 3.414 3.414 0 00-4.217 0 .734.734 0 01-1.24-.521.728.728 0 01.207-.513 4.851 4.851 0 016.283 0 .728.728 0 01-.519 1.244v-.001z"
        fill="#495BCC"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={39.397}
          y1={27.782}
          x2={43.645}
          y2={29.861}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#C5C9F7" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={1.704}
          y1={27.782}
          x2={5.951}
          y2={29.86}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#C5C9F7" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={17.476}
          y1={24.552}
          x2={38.255}
          y2={45.194}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#C5C9F7" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Casual;
