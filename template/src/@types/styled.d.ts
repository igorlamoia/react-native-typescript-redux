import 'styled-components';

import { colors } from '~/config';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: number;
    colors: typeof colors;
  }
}
