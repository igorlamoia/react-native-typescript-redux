import { Text } from 'react-native-paper';
import styled from 'styled-components/native';
import { fontSize } from '~/config';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Title = styled(Text)`
  ${fontSize(40)};
  margin: 30px 0;
`;
