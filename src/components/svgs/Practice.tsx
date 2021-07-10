import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const Practice: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={54} height={48} viewBox="0 0 54 48" fill="none" {...props}>
      <Path
        d="M42.82 16.008L39.656 12.8H28.582l-1.466-3.2-1.698 3.2H14.344l-3.164 3.057L4.746 32h44.402L42.82 16.008z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M42.82 16.008L39.656 12.8H28.582l-1.466-3.2-1.698 3.2H14.344l-3.164 3.057L19.5 20l14.5.5 8.82-4.492z"
        fill="#425780"
      />
      <Path
        d="M53.842 38.444l-3.33-16.608C49.497 16.6 44.93 12.8 39.655 12.8a10.997 10.997 0 00-9.99 6.4h-5.333a10.997 10.997 0 00-9.99-6.4c-5.274 0-9.84 3.8-10.854 9.036L.167 38.389A7.239 7.239 0 000 40c0 4.411 3.547 8 7.91 8a8.085 8.085 0 006.79-3.719l5.7-9.081h13.2l5.81 9.09c1.48 2.322 3.976 3.71 6.68 3.71 4.363 0 7.91-3.589 7.91-8 0-.592-.056-1.119-.158-1.556zM14.344 28.8c-2.617 0-4.746-2.153-4.746-4.8s2.129-4.8 4.746-4.8c2.617 0 4.746 2.153 4.746 4.8s-2.13 4.8-4.746 4.8zm14.82 0h-4.328a1.59 1.59 0 01-1.582-1.6c0-.884.707-1.6 1.582-1.6h4.328a1.59 1.59 0 011.582 1.6c0 .884-.707 1.6-1.582 1.6zm13.656-3.2h-1.582v1.6c0 .884-.707 1.6-1.582 1.6a1.59 1.59 0 01-1.582-1.6v-1.6h-1.582A1.59 1.59 0 0134.91 24c0-.884.708-1.6 1.582-1.6h1.582v-1.6c0-.884.708-1.6 1.582-1.6a1.59 1.59 0 011.582 1.6v1.6h1.582a1.59 1.59 0 011.582 1.6c0 .884-.707 1.6-1.582 1.6zm-14.238-24C28.582.716 27.874 0 27 0a1.59 1.59 0 00-1.582 1.6v11.2h3.164V1.6z"
        fill="#E61C44"
      />
      <Path
        d="M28.582 1.6C28.582.716 27.874 0 27 0a1.59 1.59 0 00-1.582 1.6v11.2h3.164V1.6z"
        fill="url(#prefix__paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={22.315}
          y1={16.551}
          x2={33.326}
          y2={38.377}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#C5C9F7" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={26.67}
          y1={3.972}
          x2={30.315}
          y2={4.873}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#C5C9F7" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Practice;
