import { Plant } from '../entities/plant';
import { SortParam } from '../helpers/sort-param';

export default interface PlantRepo {
  fetchPlants(data?: SortParam<Plant, 'name'>): Promise<Plant[]>;
}
