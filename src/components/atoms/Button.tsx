import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import colors from '../../styles/colors';

interface TitleProps extends TextProps {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
}

type ButtonProps =
  | (TitleProps & TouchableOpacityProps)
  | (Partial<TitleProps> & TouchableOpacityProps);

export const Button: React.FC<ButtonProps> = ({ title, titleStyle = {}, children, ...props }) => (
  <TouchableOpacity style={styles.button} activeOpacity={0.7} {...props}>
    {title && <Text style={[styles.text, titleStyle]}>{title}</Text>}
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    minHeight: 56,
    minWidth: 56,
  },
  text: {
    fontSize: 16,
    color: colors.white,
  },
});
