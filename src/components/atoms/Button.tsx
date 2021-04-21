import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import colors from '../../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ title, ...props }) => (
  <TouchableOpacity style={styles.button} activeOpacity={0.7} {...props}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    minHeight: 56,
    minWidth: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
});
