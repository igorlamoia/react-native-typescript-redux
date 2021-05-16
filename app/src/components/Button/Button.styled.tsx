import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { colors } from '~/config';
import { font } from '~/helpers/font';
import { StyleProps, ButtonStyle } from './Button.types';

export const MyButton = styled(Button).attrs(
  (props: StyleProps): ButtonStyle => ({
    contentStyle: {
      padding: 5,
      borderColor: '#000',
      borderWidth: props.mode === 'outlined' ? 1 : 0,
      borderRadius: 50,
    },
    labelStyle: {
      fontFamily: font('medium'),

      color: colors.textDark,
    },
  }),
)`
  width: 90%;
  border-radius: 50px;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
