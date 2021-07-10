import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Share: React.FC<SvgProps> = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M13.576 17.271l-5.11-2.787a3.5 3.5 0 110-4.968l5.11-2.787a3.5 3.5 0 11.958 1.755l-5.11 2.787c.102.48.102.977 0 1.458l5.11 2.787a3.5 3.5 0 11-.958 1.755z"
        fill="#E61C44"
      />
    </Svg>
  );
};

export default Share;
