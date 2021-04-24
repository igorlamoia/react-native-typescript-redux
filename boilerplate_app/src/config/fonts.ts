import { FontTypes } from './fonts.types';

export const fonts: FontTypes = {
  web: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'MontserratRegular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'MontserratMedium',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'MontserratLight',
      fontWeight: '100',
    },
    thin: {
      fontFamily: 'MontserratThin',
      fontWeight: '300',
    },
    bold: {
      fontFamily: 'MontserratBold',
      fontWeight: '700',
    },
  },
  android: {
    regular: {
      fontFamily: 'Montserrat-Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Montserrat-Medium',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'Montserrat-Light',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'Montserrat-Thin',
      fontWeight: '100',
    },
    semiBold: {
      fontFamily: 'Montserrat-SemiBold',
      fontWeight: '600',
    },
    bold: {
      fontFamily: 'Montserrat-Bold',
      fontWeight: '700',
    },
  },
};
