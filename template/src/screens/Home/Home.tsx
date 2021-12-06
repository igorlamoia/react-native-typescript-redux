/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import LottieView from 'lottie-react-native';

import { translate } from '~/i18n';
import { Button } from '~/components';
import { Container, Title } from './Home.styled';
import { ScreenList } from '~/@types/stack-list';

export const Home = () => {
  const navigation = useNavigation<ScreenList<'Home'>>();
  const nextScreen = () => navigation.navigate('Demo');

  return (
    <Container>
      <LottieView
        style={{ height: 200 }}
        source={require('../../assets/animations/sample-animation.json')}
        autoPlay
        loop
      />
      <Title>{translate('greetings.Hello')}</Title>
      <Button
        mode="outlined"
        onPress={nextScreen}
        disabled
        icon={() => <Icon name="star" size={20} color="#007bff" />}>
        {translate('common.next')}
      </Button>
    </Container>
  );
};
