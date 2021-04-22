import { PlantWaterFrequency } from '../entities/plant-water-frequency';

export default interface PlantWaterFrequencyRepo {
  fetchPlantWaterFrequencies(): Promise<PlantWaterFrequency[]>;
}
