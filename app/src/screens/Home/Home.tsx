/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import LottieView from 'lottie-react-native';
import Animated, { Easing, FadeInDown } from 'react-native-reanimated';
import { translate } from '~/i18n';
import { Button } from '~/components';

import { Container } from './Home.styled';

export const Home = () => {
  const navigation = useNavigation();
  const nextScreen = () => navigation.navigate('Demo');
  return (
    <Container>
      <Animated.View
        entering={FadeInDown.delay(500)
          .duration(1000)
          .easing(Easing.inOut(Easing.ease))}>
        {/* <LottieView
          style={{ height: 200 }}
          source={require('../../assets/animations/sample-animation.json')}
          autoPlay
          loop
        /> */}
      </Animated.View>
      <Text style={{ fontSize: 40, marginVertical: 30 }}>
        {translate('greetings.Hello')}
      </Text>
      <Animated.View
        entering={FadeInDown.delay(500)
          .duration(1000)
          .easing(Easing.inOut(Easing.ease))}>
        <Button
          mode="outlined"
          onPress={nextScreen}
          icon={() => <Icon name="star" size={20} color="#007bff" />}>
          <Text>{translate('common.next')}</Text>
        </Button>
      </Animated.View>
    </Container>
  );
};
