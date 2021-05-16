import { Platform } from 'react-native';
import { fontConfig } from '~/config';

type Fonts = {
  regular: string;
  medium: string;
  light: string;
  thin: string;
  semiBold: string;
  bold: string;
};

// @TODO
type FontFamily = string;

type KeyPath = RecursiveKeyOf<Fonts>;

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
