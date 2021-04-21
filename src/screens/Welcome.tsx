import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, Dimensions, View } from 'react-native';

import wateringImg from '../assets/watering.png';
import { Button } from '../components/atoms/Button';
import colors from '../styles/colors';
import { Feather } from '@expo/vector-icons';
import fonts from '../styles/fonts';

export const Welcome: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>
        <Image source={wateringImg} style={styles.image} resizeMode='contain' />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas {'\n'} plantas. Nós cuidamos de lembrar você sempre que
          precisar.
        </Text>
        <Button>
          <Feather name='chevron-right' size={24} color='black' style={styles.buttonIcon} />
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 38,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  buttonIcon: {
    color: colors.white,
  },
});
