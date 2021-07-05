import { Platform } from 'react-native';
import { fontConfig } from '~/config';

enum Fonts {
  regular,
  medium,
  light,
  thin,
  semiBold,
  bold,
}

// @TODO
type FontFamily = string;

type KeyPath = keyof typeof Fonts;

/**
 * A simple way to set your font independent of the device
 *
 * @param {font} Font weight to be used
 * @returns Font Family Name
 *
 * Use this method to easily set your custom font
 */
export const font = (fontKey: KeyPath): FontFamily => {
  return Platform.OS === 'android'
    ? fontConfig.android[fontKey].fontFamily
    : fontConfig.ios[fontKey].fontFamily;
};
