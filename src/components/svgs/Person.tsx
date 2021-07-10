import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Person: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" {...props}>
      <Path d="M2.667 14.667a5.333 5.333 0 1110.666 0H2.667zm5.333-6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
    </Svg>
  );
};

export default Person;
