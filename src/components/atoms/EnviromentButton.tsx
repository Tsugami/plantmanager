import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  action?: boolean;
}

export const EnviromentButton: React.FC<EnviromentButtonProps> = ({
  title,
  action = false,
  ...rest
}) => (
  <RectButton style={[styles.container, action && styles.containerActive]} {...rest}>
    <Text style={[styles.text, action && styles.textActive]}>{title}</Text>
  </RectButton>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 5,
  },
  containerActive: {
    backgroundColor: colors.green_light,
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});
