import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStack } from '../types';
import { SvgFromUri } from 'react-native-svg';

import waterdrop from '../assets/waterdrop.png';
import { Button } from '../components/atoms/Button';

export const PlantSave: React.FC<StackScreenProps<RootStack, 'PlantSave'>> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri uri='' width={150} height={150} />
        <Text style={styles.plantName}>Nome da Planta</Text>
        <Text style={styles.plantAbout}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta natus id rerum, incidunt
          quibusdam reiciendis nobis, blanditiis nisi eum error labore expedita cumque itaque, ex
          deleniti debitis repudiandae quaerat earum?
        </Text>
      </View>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterdrop as ImageSourcePropType} style={styles.tipImage} />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nam incidunt sit earum
            dicta, pariatur labore reiciendis omnis recusandae eos dolor tempora, culpa inventore
            illo iusto id ipsum? Ullam, optio.
          </Text>
        </View>
        <Text style={styles.alertLabel}>Escolha o melhor horário para ser lembrado:</Text>
        <Button title='Cadastrar planta' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape,
  },
  plantInfo: {},
  plantName: {},
  plantAbout: {},
  controller: {},
  tipContainer: {},
  tipImage: {},
  alertLabel: {},
});
