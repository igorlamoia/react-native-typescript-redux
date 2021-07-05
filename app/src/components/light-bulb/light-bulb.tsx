import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react-native';

import { LightBulbComponent } from './light-bulb.styled';

type LightBulbProps = {
  enabled?: boolean;
};

export const LightBulb: React.FC<LightBulbProps> = ({ enabled }) => {
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

  return <LightBulbComponent lottieRef={ref} />;
};
