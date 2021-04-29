import React from 'react';
import { Button, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';

import { Container } from './Demo.styled';
import { translate } from '~/i18n';

export const Demo = observer(() => {
  const navigation = useNavigation();
  const nextScreen = () => navigation.navigate('Counter');
  const previewScreen = () => navigation.goBack();
  return (
    <Container>
      <Text style={{ fontSize: 40, marginVertical: 30 }}>
        {translate('greetings.DemoScreen')}
      </Text>
      <Button title={translate('common.back')} onPress={previewScreen} />
      <View style={{ height: 20 }} />
      <Button title={translate('common.next')} onPress={nextScreen} />
    </Container>
  );
});
