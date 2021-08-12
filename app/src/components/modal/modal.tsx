/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Container, RNModal } from './modal.styled';

export const Modal = (props) => {
  return (
    <RNModal
      isVisible={props.isVisible}
      swipeDirection="down"
      onBackdropPress={props.toggleModal}
      onSwipeComplete={props.toggleModal}>
      <Container />
    </RNModal>
  );
};
