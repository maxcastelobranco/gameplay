import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Calendar: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
      <Path
        d="M.333 7.333h13.334v6A.666.666 0 0113 14H1a.666.666 0 01-.667-.667v-6zm10-5.333H13a.666.666 0 01.667.667V6H.333V2.667A.667.667 0 011 2h2.667V.667H5V2h4V.667h1.333V2z"
        fill="#E61C44"
      />
    </Svg>
  );
};

export default Calendar;
