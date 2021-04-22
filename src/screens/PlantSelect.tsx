import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStack } from '../types';
import { Header } from '../components/molecules/Header';
import { EnviromentButton } from '../components/atoms/EnviromentButton';
import { plantEnviromentRepo, plantsRepo } from '../api';
import { PlantEnviroment } from '../api/domain/entities/plant-enviroment';
import { Plant } from '../api/domain/entities/plant';
import { PlantCardPrimary } from '../components/atoms/PlantCardPrimary';
import { Load } from '../components/atoms/Load';
import { removeDuplicateElems } from '../helpers/removeDuplicateElements';

const allEnviroments = {
  key: 'all',
  title: 'Todos',
};

export const PlantSelect: React.FC<StackScreenProps<RootStack, 'PlantSelect'>> = () => {
  const [enviromentSelected, setEnviromentSelected] = useState<string | 'all'>(allEnviroments.key);

  const [enviroments, setEnviroments] = useState<PlantEnviroment[]>([]);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loadingEnviroments, setLoadingEnviroments] = useState(true);
  const [loadingPlants, setLoadingPlants] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  const loading = useMemo(() => loadingEnviroments || loadingPlants, [
    loadingEnviroments,
    loadingPlants,
  ]);

  const filteredPlants = useMemo(
    () =>
      enviromentSelected === 'all'
        ? plants
        : plants.filter((plant) => plant.environments.includes(enviromentSelected)),
    [plants, enviromentSelected],
  );

  useEffect(() => {
    plantEnviromentRepo
      .fetchPlantEnviroment({ sort: { field: 'title', order: 'asc' } })
      .then(setEnviroments)
      .finally(() => setLoadingEnviroments(false));
  }, []);

  useEffect(() => {
    plantsRepo
      .fetchPlants({ sort: { field: 'name', order: 'asc' } })
      .then((newPlants) =>
        setPlants((oldPlants) => removeDuplicateElems(oldPlants.concat(newPlants), 'name')),
      )
      .finally(() => {
        setLoadingPlants(false);
        setLoadingMore(false);
      });
  }, [page]);

  const handleFetchMore = (distance: number) => {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPage((oldPage) => oldPage + 1);
  };

  if (loading) {
    return <Load />;
  }

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
      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          keyExtractor={(item, index) => item.id + index}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={loadingMore ? <ActivityIndicator color={colors.green} /> : null}
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
  plants: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
});
