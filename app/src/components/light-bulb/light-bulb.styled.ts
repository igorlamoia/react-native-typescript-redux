import { createElement as createReactElement } from 'react';
import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';
import { ViewStyle } from 'react-native';

import lottieUri from './assets/light-bulb.json';

type LottieViewProps = ViewStyle & {
  lottieRef: any;
};

export const LightBulbComponent = styled.View.attrs(
  (props: LottieViewProps) => ({
    children: createReactElement(Lottie, {
      source: lottieUri,
      loop: false,
      style: { height: 250 },
      ref: props.lottieRef,
    }),
  }),
)<LottieViewProps>``;
