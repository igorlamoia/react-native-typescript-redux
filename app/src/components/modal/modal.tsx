/* eslint-disable react-native/no-raw-text */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button } from 'react-native-paper';
import { Container, RNModal } from './modal.styled';

export const Modal = (props) => {
  return (
    <RNModal
      transparent
      onDismiss={props.toggleModal}
      visible={props.isVisible}>
      <Container>
        <Button onPress={props.toggleModal}>Close Modal</Button>
      </Container>
    </RNModal>
  );
};
