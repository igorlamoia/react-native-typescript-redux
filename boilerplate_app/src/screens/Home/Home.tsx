import React from 'react';
import { Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { translate } from '~/i18n';
import { Button } from '~/components';
const LottieView = require('lottie-react-native');

import { Container } from './Home.styled';

export const Home = observer(() => {
  const navigation = useNavigation();
  const nextScreen = () => navigation.navigate('Demo');
  return (
    <Container>
      <LottieView style={{ height:200 }}source={require('../../assets/animations/sample-animation.json')} autoPlay loop />
      <Text style={{ fontSize: 40, marginVertical: 30 }}>
        {translate('greetings.Hello')}
      </Text>
      <Button
        mode="outlined"
        onPress={nextScreen}
        icon={() => <Icon name="star" size={20} color="#007bff" />}>
        <Text>{translate('common.next')}</Text>
      </Button>
    </Container>
  );
});
