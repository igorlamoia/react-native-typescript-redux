/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Button, Text } from 'react-native';

import { useAppDispatch, useAppSelector } from '~/utils/hooks';

import { Container } from './redux-demo.styled';
import { translate } from '~/i18n';
import { setValue } from '~/store/ducks/counter';

export const Counter = () => {
  const dispatch = useAppDispatch();

  // The `state` arg is correctly typed with all states from `RootState` already
  const count = useAppSelector((state) => state.counter);
  const [number, setNumber] = useState(count.value);

  const sum = () => {
    setNumber(number + 1);
    dispatch(setValue(number + 1));
  };

  const substract = () => {
    setNumber(number - 1);
    dispatch(setValue(number - 1));
  };

  return (
    <Container>
      {/* Do not use inline styles, i'm just lazy :poop: */}
      <Text style={{ fontSize: 30, marginVertical: 30, textAlign: 'center' }}>
        {translate('greetings.ReduxExample')}
      </Text>
      <Button title={translate('common.increment')} onPress={sum} />
      <Text style={{ fontSize: 40, marginVertical: 30 }}>{number}</Text>
      <Button title={translate('common.decrement')} onPress={substract} />
    </Container>
  );
};
