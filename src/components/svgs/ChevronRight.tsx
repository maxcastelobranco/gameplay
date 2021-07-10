import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ChevronRight: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={6} height={9} viewBox="0 0 6 9" fill="none" {...props}>
      <Path
        d="M2.829 4.243L0 1.415 1.414 0l4.243 4.243-4.243 4.243L0 7.071l2.829-2.828z"
        fill="#ABB1CC"
      />
    </Svg>
  );
};

export default ChevronRight;
