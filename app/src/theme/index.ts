import { configureFonts, DefaultTheme } from 'react-native-paper';
import { colors, fontConfig } from '~/config';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
  fonts: configureFonts(fontConfig),
};

export const styledTheme = {
  borderRadius: theme.roundness,
  colors: theme.colors,
};
