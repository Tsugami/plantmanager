import { PlantEnviroment } from '../entities/plant-enviroment';

export default interface PlantEnviromentRepo {
  fetchPlantEnviroment(): Promise<PlantEnviroment[]>;
}
