import { PlantEnviroment } from '../entities/plant-enviroment';
import { SortParam } from '../helpers/sort-param';

export default interface PlantEnviromentRepo {
  fetchPlantEnviroment(data?: SortParam<PlantEnviroment, 'title'>): Promise<PlantEnviroment[]>;
}
