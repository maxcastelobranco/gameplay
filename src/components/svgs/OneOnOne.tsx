import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const OneOnOne: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
      <Path
        d="M42.022 42.022a4.094 4.094 0 00-1.156 2.353l-9.93-9.93 3.508-3.51 9.931 9.931c-.86.12-1.691.495-2.353 1.156z"
        fill="#495BCC"
      />
      <Path
        d="M43.862 47.998a4.135 4.135 0 100-8.271 4.135 4.135 0 000 8.27z"
        fill="#E61C44"
      />
      <Path
        d="M34 27.999L7.018 1.169 0 0l1.17 7.018 26.981 26.83L34 27.997z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M5.978 42.022a4.094 4.094 0 011.156 2.353l9.93-9.93-3.508-3.51-9.931 9.931c.86.12 1.691.495 2.353 1.156z"
        fill="#495BCC"
      />
      <Path
        d="M4.135 47.998a4.135 4.135 0 100-8.271 4.135 4.135 0 000 8.27z"
        fill="#E61C44"
      />
      <Path
        d="M19.063 34.787l-5.85-5.85L40.982 1.17 48 0l-1.17 7.018-27.767 27.769z"
        fill="url(#prefix__paint1_linear)"
      />
      <Path
        d="M29.828 38.016l8.188-8.188v-3.51h-3.509l-8.188 8.189v3.509h3.509zM18.172 38.016l-8.188-8.188v-3.51h3.509l8.188 8.189v3.509h-3.509z"
        fill="#E61C44"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={13.453}
          y1={10.503}
          x2={43.346}
          y2={44.633}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#C5C9F7" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={26.977}
          y1={10.794}
          x2={48.239}
          y2={32.054}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#C5C9F7" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default OneOnOne;
