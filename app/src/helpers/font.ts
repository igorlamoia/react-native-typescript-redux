import { Platform } from 'react-native';
import { fontConfig, iOS } from '~/config';
import { FontTypes } from '~/config/fonts.types';

enum Fonts {
  regular,
  medium,
  light,
  thin,
  semiBold,
  bold,
}

type KeyPath = keyof typeof Fonts;

/**
 * A simple way to set your font independent of the device
 *
 * @param {font} Font weight to be used
 * @returns Font Family Name
 *
 * Use this method to easily set your custom font
 */
export const pickFont = (fontKey: KeyPath): string => {
  return Platform.OS === 'android'
    ? fontConfig.android[fontKey].fontFamily
    : fontConfig.ios[fontKey].fontFamily;
};

const parseFont = {
  '100': pickFont('thin'),
  // 200: pickFont('extraLight'),
  '300': pickFont('light'),
  '400': pickFont('regular'),
  '500': pickFont('medium'),
  '600': pickFont('semiBold'),
  '700': pickFont('bold'),
  // 800: pickFont('extraBold'),
  // 900: pickFont('black'),
  bold: pickFont('bold'),
  normal: pickFont('regular'),
};

type Font = {
  fontFamily: string;
  fontWeight: FontTypes['ios']['regular']['fontWeight'];
};

export const font = (weight: Font['fontWeight']): Font => ({
  fontFamily: parseFont[weight],
  ...(iOS && { fontWeight: weight }),
});
