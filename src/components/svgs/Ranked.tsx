import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Stop,
} from "react-native-svg";

const Ranked: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M27.396 8.741a1.24 1.24 0 01.871-1.52 6.206 6.206 0 004.44-4.742h-3.592a1.239 1.239 0 110-2.479h4.958c.685 0 1.24.554 1.24 1.24a8.69 8.69 0 01-6.397 8.373 1.24 1.24 0 01-1.52-.872zM25.396 11.156v7.438c0 .694-.546 1.24-1.24 1.24s-1.24-.546-1.24-1.24v-7.438c0-.694.546-1.24 1.24-1.24.695 0 1.24.546 1.24 1.24zM19.396 9.613A8.69 8.69 0 0113 1.24C13 .554 13.554 0 14.24 0h4.958a1.239 1.239 0 110 2.48h-3.593a6.206 6.206 0 004.44 4.74 1.24 1.24 0 11-.649 2.393z"
          fill="#495BCC"
        />
        <Path
          d="M29.625 26h-11.25c-.788 0-1.406.685-1.406 1.557v18.886c0 .872.618 1.557 1.406 1.557h11.25c.788 0 1.406-.685 1.406-1.557V27.557c0-.872-.618-1.557-1.406-1.557z"
          fill="url(#prefix__paint0_linear)"
        />
        <Path
          d="M43.688 16.25H42.28v-1.406a1.405 1.405 0 10-2.812 0v1.406h-1.407a1.405 1.405 0 100 2.813h1.407v1.406a1.405 1.405 0 102.812 0v-1.407h1.407a1.406 1.406 0 100-2.812z"
          fill="url(#prefix__paint1_linear)"
        />
        <Path
          d="M9.938 22.438H8.53V21.03a1.405 1.405 0 10-2.812 0v1.407H4.312a1.405 1.405 0 100 2.812H5.72v1.406a1.405 1.405 0 102.812 0V25.25h1.406a1.405 1.405 0 100-2.813z"
          fill="url(#prefix__paint2_linear)"
        />
        <Path
          d="M46.594 48H35.25c-.777 0-1.406-.794-1.406-1.776V31.776c0-.982.629-1.776 1.406-1.776h11.344c.777 0 1.406.794 1.406 1.776v14.448c0 .982-.629 1.776-1.406 1.776zM12.75 48H1.406C.63 48 0 47.115 0 46.022v-8.044C0 36.885.629 36 1.406 36H12.75c.777 0 1.406.885 1.406 1.978v8.044c0 1.093-.629 1.978-1.406 1.978z"
          fill="#E61C44"
        />
        <Path
          d="M29.115 0h-9.917c-.694 0-1.24.545-1.24 1.24v4.958a6.2 6.2 0 006.198 6.198 6.2 6.2 0 006.198-6.198V1.24c0-.695-.545-1.24-1.24-1.24z"
          fill="url(#prefix__paint3_linear)"
        />
        <Path
          d="M27.875 17.354h-7.438c-1.363 0-2.479 1.046-2.479 2.323v1.162c0 .65.546 1.161 1.24 1.161h9.917c.694 0 1.24-.511 1.24-1.162v-1.16c0-1.279-1.116-2.324-2.48-2.324z"
          fill="#495BCC"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={22.533}
          y1={32.827}
          x2={41.175}
          y2={46.37}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#C5C9F7" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={39.995}
          y1={16.056}
          x2={47.451}
          y2={24.53}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#C5C9F7" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={6.245}
          y1={22.243}
          x2={13.701}
          y2={30.718}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#C5C9F7" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint3_linear"
          x1={22.863}
          y1={3.846}
          x2={33.817}
          y2={16.297}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#C5C9F7" />
        </LinearGradient>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Ranked;
