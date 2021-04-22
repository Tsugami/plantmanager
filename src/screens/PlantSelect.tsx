import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStack } from '../types';
import { Header } from '../components/molecules/Header';

export const PlantSelect: React.FC<StackScreenProps<RootStack, 'PlantSelect'>> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>voce quer colocar sua planta?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
});