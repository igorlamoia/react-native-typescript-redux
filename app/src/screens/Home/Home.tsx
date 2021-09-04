/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import Animated, { Easing, FadeInDown } from 'react-native-reanimated';
import { translate } from '~/i18n';
import { Button } from '~/components';

import { Container } from './Home.styled';
import { Modal } from '~/components/modal/modal';

export const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const toggleModal = React.useCallback(
    () => setIsModalVisible((prev) => !prev),
    [],
  );
  return (
    <>
      <Container>
        <Animated.View
          entering={FadeInDown.delay(300)
            .duration(700)
            .easing(Easing.inOut(Easing.ease))}>
          <Text>Example text</Text>
        </Animated.View>
        <Text style={{ fontSize: 40, marginVertical: 30 }}>
          {translate('greetings.Hello')}
        </Text>
        <Animated.View
          entering={FadeInDown.delay(500)
            .duration(700)
            .easing(Easing.inOut(Easing.ease))}>
          <Button
            mode="outlined"
            onPress={toggleModal}
            icon={() => <Icon name="star" size={20} color="#007bff" />}>
            <Text>Toggle Modal</Text>
          </Button>
        </Animated.View>
      </Container>
      <Modal isVisible={isModalVisible} toggleModal={toggleModal} />
    </>
  );
};
