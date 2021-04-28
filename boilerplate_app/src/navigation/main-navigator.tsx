import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Demo, Home, Counter } from '~/screens';

type StackList = {
  Home: undefined;
  Demo: undefined;
  Counter: undefined;
};

const Stack = createStackNavigator<StackList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Demo" component={Demo} />
      <Stack.Screen name="Counter" component={Counter} />
    </Stack.Navigator>
  );
};

const exitRoutes = ['Home'];

export const canExit = (routeName: string) => exitRoutes.includes(routeName);
