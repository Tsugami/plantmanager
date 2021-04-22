import { PlantWaterFrequency } from '../../domain/entities/plant-water-frequency';
import PlantWaterFrequencyRepo from '../../domain/repositories/plant-water-frequencies-repo';

export default class FakePlantWaterFrequencyRepo implements PlantWaterFrequencyRepo {
  fetchPlantWaterFrequencies(): Promise<PlantWaterFrequency[]> {
    return Promise.resolve([
      { key: 'day', title: 'Todos os dias' },
      { key: 'week', title: 'A cada semana' },
    ]);
  }
}
