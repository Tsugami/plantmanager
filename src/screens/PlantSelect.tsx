import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStack } from '../types';
import { Header } from '../components/molecules/Header';
import { EnviromentButton } from '../components/atoms/EnviromentButton';
import { plantEnviromentRepo } from '../api';
import { PlantEnviroment } from '../api/domain/entities/plant-enviroment';

const allEnviroments = {
  key: 'all',
  title: 'Todos',
};

export const PlantSelect: React.FC<StackScreenProps<RootStack, 'PlantSelect'>> = () => {
  const [enviroments, setEnviroments] = useState<PlantEnviroment[]>([]);
  const [enviromentSelected, setEnviromentSelected] = useState<string>(allEnviroments.key);

  useEffect(() => {
    plantEnviromentRepo.fetchPlantEnviroment().then(setEnviroments);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>voce quer colocar sua planta?</Text>
      </View>
      <View>
        <FlatList
          data={[allEnviroments, ...enviroments]}
          renderItem={({ item }) => (
            <EnviromentButton
              title={item.title}
              action={enviromentSelected === item.key}
              onPress={() => setEnviromentSelected(item.key)}
            />
          )}
          keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
          horizontal
        />
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
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
});
