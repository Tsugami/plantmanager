import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import avatarImg from '../../assets/avatar.jpg';
import { AsyncStorageKeys } from '../../helpers/Constants';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Header: React.FC = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    AsyncStorage.getItem(AsyncStorageKeys.USERNAME).then((storageUsername) => {
      if (storageUsername) setUsername(storageUsername);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{username}</Text>
      </View>
      <Image source={avatarImg as ImageSourcePropType} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
    backgroundColor: colors.background,
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
