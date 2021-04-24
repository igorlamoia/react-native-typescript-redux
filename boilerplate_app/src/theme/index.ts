import { configureFonts, DefaultTheme } from 'react-native-paper';
import { fonts } from '~/config';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#007bff',
    accent: '#f8cf40',
  },
  fonts: configureFonts(fonts),
};
