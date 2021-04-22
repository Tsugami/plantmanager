import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/atoms/Button';
import colors from '../styles/colors';
import emojis from '../styles/emojis';
import fonts from '../styles/fonts';
import { RootStack } from '../types';

export const Confirmation: React.FC<StackScreenProps<RootStack, 'Confirmation'>> = ({
  navigation,
}) => {
  const handleRedirect = () => {
    navigation.navigate('PlantSelect');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{emojis.grin}</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
        <View style={styles.footer}>
          <Button title='Começar' onPress={handleRedirect} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: colors.background,
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
    fontSize: 22,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 30,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 17,
    color: colors.heading,
    paddingVertical: 10,
  },
});
