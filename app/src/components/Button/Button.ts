import styled from 'styled-components/native';
import { Button as B } from 'react-native-paper';
import { font } from '~/helpers/font';

export const Button = styled(B).attrs((props) => ({
  contentStyle: {
    padding: 5,
    borderColor: '#000',
    borderWidth: props.mode === 'outlined' ? 1 : 0,
    borderRadius: 50,
  },
  labelStyle: {
    ...font('500'),
    color: props.theme.text,
  },
}))`
  width: 90%;
  border-radius: 50px;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
