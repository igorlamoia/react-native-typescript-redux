import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Text } from 'react-native';

import { useDispatch } from 'react-redux';
import { useAppSelector } from '~/hooks';
import { increment, decrement } from '~/Store/features/counter';

import { Container } from './ReduxDemo.styled';
import { translate } from '~/i18n';

export const Counter = observer(() => {
  // The ``state`` arg is correctly typed as `RootState` already
  const count = useAppSelector(state => state.counter);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(count.value);

  const sum = () => {
    setNumber(number + 1);
    dispatch(increment({ value: number + 1 }));
  };

  const substract = () => {
    setNumber(number - 1);
    dispatch(decrement({ value: number - 1 }));
  };

  return (
    <Container>
      <Text style={{ fontSize: 40, marginVertical: 30 }}>
        {translate('greetings.ReduxExample')}
      </Text>
      <Button title={translate('common.increment')} onPress={sum} />
      <Text style={{ fontSize: 40, marginVertical: 30 }}>{number}</Text>
      <Button title={translate('common.decrement')} onPress={substract} />
    </Container>
  );
});
