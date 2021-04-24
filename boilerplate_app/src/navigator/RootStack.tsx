import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MainNavigator } from './mainNavigator';

export type RootParamList = {
  mainStack: undefined;
};

const Stack = createStackNavigator<RootParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="mainStack"
        component={MainNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
