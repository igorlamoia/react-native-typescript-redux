import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import switchUri from './assets/switch.json';
import { SwitchProps } from './switch.types';

export const Switch = ({ enabled, onPress }: SwitchProps) => {
  const ref = useRef<Lottie>();
  const notAnimate = useRef(true);

  useEffect(() => {
    const animation = ref.current;
    const effect = () =>
      enabled ? animation.play(60, 60) : animation.play(29, 29);

    effect();
  }, []);

  useEffect(() => {
    const animation = ref.current;
    const effect = () =>
      enabled ? animation.play(29, 60) : animation.play(0, 29);

    if (!notAnimate.current) {
      effect();
    }
    notAnimate.current = false;
  }, [enabled]);

  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Lottie
          ref={ref}
          source={switchUri}
          style={{ height: 50 }}
          loop={false}
        />
      </View>
    </TouchableOpacity>
  );
};
