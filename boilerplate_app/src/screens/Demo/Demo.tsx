import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';

import { Container } from './Demo.styled';
import { translate } from '~/i18n';
import { ButtonWrapper } from '~/components/Button';
import { Switch } from '~/components/switch';
import { LightBulb } from '~/components/light-bulb';

export const Demo = observer(() => {
  const [enabled, setEnabled] = useState(true);
  const navigation = useNavigation();
  const nextScreen = () => navigation.navigate('Counter');
  const previewScreen = () => navigation.goBack();

  return (
    <Container>
      <Text style={{ fontSize: 40, marginVertical: 30 }}>
        {translate('greetings.DemoScreen')}
      </Text>
      <Switch enabled={enabled} onPress={() => setEnabled(!enabled)} />
      <LightBulb enabled={enabled} />
      <Text style={{ fontSize: 20 }}>
        {enabled ? translate('common.switchOn') : translate('common.switchOff')}
      </Text>
      <ButtonWrapper>
        <Button title={translate('common.back')} onPress={previewScreen} />
        <Button title={translate('common.next')} onPress={nextScreen} />
      </ButtonWrapper>
    </Container>
  );
});
