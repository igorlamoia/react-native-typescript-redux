import { StackNavigationProp } from '@react-navigation/stack';

declare type MainStackList = {
  Home: undefined;
  Demo: undefined;
  Counter: undefined;
};

type ScreenList<T extends string> = StackNavigationProp<MainStackList, T>;
