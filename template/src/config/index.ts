import { Dimensions, Platform } from 'react-native';

export * from './fonts';
export * from './colors';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const iOS = Platform.OS === 'ios';

const sizes = {
  6: DEVICE_WIDTH * (6 / 365),
  8: DEVICE_WIDTH * (8 / 365),
  10: DEVICE_WIDTH * (10 / 365),
  12: DEVICE_WIDTH * (12 / 365),
  14: DEVICE_WIDTH * (14 / 365),
  16: DEVICE_WIDTH * (16 / 365),
  20: DEVICE_WIDTH * (20 / 365),
  40: DEVICE_WIDTH * (40 / 365),
};

export const fontSize = (size: number) => ({
  fontSize: sizes[size],
});
