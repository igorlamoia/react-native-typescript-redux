import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react-native';
import { View } from 'react-native';

import lottieUri from './assets/light-bulb.json';
import { LightBulbProps } from './light-bulb.types';

export const LightBulb = ({ enabled }: LightBulbProps) => {
  const ref = useRef<Lottie>();
  const notAnimate = useRef(true);

  useEffect(() => {
    const animation = ref.current;
    const effect = () =>
      enabled ? animation.play(90, 90) : animation.play(45, 45);

    effect();
  }, []);

  useEffect(() => {
    const animation = ref.current;
    const effect = () =>
      enabled ? animation.play(20, 90) : animation.play(90, 150);

    if (!notAnimate.current) {
      effect();
    }
    notAnimate.current = false;
  }, [enabled]);

  return (
    <View>
      <Lottie
        ref={ref}
        source={lottieUri}
        loop={false}
        style={{ height: 250 }}
      />
    </View>
  );
};
