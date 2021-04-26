import { ReactNode } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { IconProps } from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';

declare type Modify<T, R> = Omit<T, keyof R> & R;

type Icon = Modify<
  IconProps,
  {
    name?: string;
    color?: string;
    size?: number;
    direction?: 'rtl' | 'ltr';
    allowFontScaling?: boolean;
  }
>;

export interface ButtonProps {
  /**
   * Default value: 'text'
   *
   * @param 'text' - flat button without background or outline (low emphasis)
   * @param 'outlined' - button with an outline (medium emphasis)
   * @param 'contained' - button with a background color and elevation shadow (high emphasis)
   */
  mode?: 'text' | 'outlined' | 'contained';

  /** Whether the color is a dark color. A dark button will render light text and vice-versa. Only applicable for contained mode. */
  dark?: boolean;

  /** Use a compact look, useful for text buttons in a row. */
  compact?: boolean;

  /** Custom text color for flat button, or background color for contained button. */
  color?: string;

  /** Whether to show a loading indicator. */
  loading?: boolean;

  /**
   * Icon to display for the Button.
   * @function () => Icon
   *
   * A function to receive the icon component from react-native-vector-icons
   */
  icon?: () => Icon;

  /** Whether the button is disabled. A disabled button is greyed out and onPress is not called on touch. */
  disabled?: boolean;

  /** (Required) Label text of the button. */
  children: ReactNode;

  /**
   * Default value: true.
   *
   * Make the label text uppercased. Note that this won't work if you pass React elements as children.
   */
  uppercase?: boolean;

  /**
   * @function () => void
   *
   * Function to execute on press.
   */
  onPress?: () => void;

  /**
   * @function () => void
   *
   * Function to execute on long press.
   */
  onLongPress?: () => void;
}

export type StyleProps = {
  mode: string;
};

export type ButtonStyle = {
  contentStyle: ViewStyle;
  labelStyle: TextStyle;
};
