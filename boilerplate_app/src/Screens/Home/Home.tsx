import React from 'react';
import { Button, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import { translate } from '~/i18n';

import { Container } from './Home.styled';

export const Home = observer(() => {
  const navigation = useNavigation();
  const nextScreen = () => navigation.navigate('Demo');
  return (
    <Container>
      <Text style={{ fontSize: 40, marginVertical: 30 }}>
        {translate('greetings.Hello')}
      </Text>
      <Button title={translate('common.next')} onPress={nextScreen} />
    </Container>
  );
});
