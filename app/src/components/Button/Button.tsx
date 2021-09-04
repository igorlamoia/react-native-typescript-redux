import React from 'react';

import { MyButton } from './Button.styled';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <MyButton {...props}>{children}</MyButton>
);
