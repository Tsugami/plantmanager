import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { Button } from '../components/atoms/Button';
import colors from '../styles/colors';
import emojis from '../styles/emojis';
import fonts from '../styles/fonts';
import { RootStack } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageKeys } from '../helpers/Constants';

export const UserIdentification: React.FC<StackScreenProps<RootStack, 'UserIdentification'>> = ({
  navigation,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [username, setUsername] = useState('');

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleRedirect = async () => {
    await AsyncStorage.setItem(AsyncStorageKeys.USERNAME, username);
    navigation.navigate('Confirmation');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>{username ? emojis.smile : emojis.smiley}</Text>
                <Text style={styles.title}>Como podemos {'\n'} chamar você?</Text>
              </View>
              <TextInput
                style={[styles.input, isFocused || username ? styles.inputFocused : {}]}
                placeholder='Digite seu nome'
                value={username}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChangeText={setUsername}
              />
              <View style={styles.footer}>
                <Button
                  title='Confirmar'
                  onPress={handleRedirect}
                  disabled={!username}
                  style={!username && styles.buttonDisabled}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    alignContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 34,
    marginTop: 20,
  },
  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
  },
  inputFocused: {
    borderColor: colors.green,
  },
  buttonDisabled: {
    backgroundColor: colors.green_light,
  },
});
