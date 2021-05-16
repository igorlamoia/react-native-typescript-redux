import React from 'react';

import { MyButton } from './Button.styled';
import { ButtonProps } from './Button.types';

export const Button = ({
  children,
  icon,
  mode,
  onPress,
  uppercase,
  color,
  disabled,
  compact,
  dark,
  loading,
  onLongPress,
}: ButtonProps) => (
  <MyButton
    compact={compact}
    dark={dark}
    loading={loading}
    disabled={disabled}
    icon={icon}
    mode={mode}
    uppercase={uppercase}
    color={color}
    onPress={onPress}
    onLongPress={onLongPress}>
    {children}
  </MyButton>
);
