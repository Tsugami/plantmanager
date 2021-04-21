import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/atoms/Button';
import colors from '../styles/colors';
import emojis from '../styles/emojis';
import fonts from '../styles/fonts';

export const Confirmation: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.emoji}>{emojis.grin}</Text>
            <Text style={styles.title}>Prontinho</Text>
            <Text style={styles.text}>
              Agora vamos começar a cuidar das suas {'\n'} plantinhas com muito cuidado.
            </Text>
          </View>
          <View style={styles.footer}>
            <Button title='Começar' />
          </View>
        </View>
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
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  },
  form: {
    flex: 1,
  },
  emoji: {
    fontSize: 70,
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
  text: {
    fontFamily: fonts.text,
    textAlign: 'center',
  },
});
