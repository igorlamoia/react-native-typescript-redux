import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MainNavigator } from './main-navigator';

export type RootList = {
  mainStack: undefined;
};

const Stack = createStackNavigator<RootList>();

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
