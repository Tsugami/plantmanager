import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '../components/atoms/Button';
import colors from '../styles/colors';
import emojis from '../styles/emojis';
import fonts from '../styles/fonts';

export const UserIdentification: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.emoji}>{emojis.smiley}</Text>
          <Text style={styles.title}>Como podemos {'\n'} chamar você?</Text>
          <TextInput style={styles.input} placeholder='Digite seu nome' />
          <View style={styles.footer}>
            <Button title='Confirmar' />
          </View>
        </View>
      </View>
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
});
