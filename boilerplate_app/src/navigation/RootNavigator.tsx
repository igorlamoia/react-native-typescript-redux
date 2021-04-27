import React, { ComponentProps } from 'react';
import { StatusBar } from 'react-native';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import { RootStack } from './RootStack';

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <StatusBar translucent backgroundColor="transparent" />
      <RootStack />
    </NavigationContainer>
  );
});

RootNavigator.displayName = 'RootNavigator';
