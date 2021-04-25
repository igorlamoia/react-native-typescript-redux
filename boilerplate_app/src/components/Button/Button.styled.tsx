import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { colors, fonts } from '~/config';
import { StyleProps, ButtonStyle } from './Button.types';

const { bold } = fonts.android;

export const MyButton = styled(Button).attrs(
  (props: StyleProps): ButtonStyle => ({
    contentStyle: {
      padding: 2,
    },
    labelStyle: {
      fontFamily: bold.fontFamily,
      color: colors.textDark,
    },
  }),
)`
  width: 90%;
  border-radius: 50px;
`;
