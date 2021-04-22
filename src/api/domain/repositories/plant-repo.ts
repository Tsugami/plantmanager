import { Plant } from '../entities/plant';

export default interface PlantRepo {
  fetchPlants(): Promise<Plant[]>;
}
