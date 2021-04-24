import React from 'react';
import Svg, { G, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props) => (
  <Svg
    width={props.width || 49}
    height={props.height || 45}
    viewBox="0 0 49 45"
    fill="none"
    {...props}>
    <G filter="url(#filter0_d)">
      <Path
        d="M42.308 0L13.153 29.357l-8.461-5.902H0L13.153 43 47 0h-4.692z"
        fill="#83BF4F"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SvgComponent;
