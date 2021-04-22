import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import avatarImg from '../../assets/avatar.jpg';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Header: React.FC = () => (
  <View style={styles.container}>
    <View>
      <Text style={styles.greeting}>Olá,</Text>
      <Text style={styles.userName}>Rodrigo</Text>
    </View>
    <Image source={avatarImg} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
    backgroundColor: colors.red,
    padding: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
});