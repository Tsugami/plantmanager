import { PlantEnviroment } from '../../domain/entities/plant-enviroment';
import { SortParam } from '../../domain/helpers/sort-param';
import PlantEnviromentRepo from '../../domain/repositories/plant-enviroment-repo';
import { sortItems } from '../helpers/sort-items';

export default class FakeEnviromentRepo implements PlantEnviromentRepo {
  fetchPlantEnviroment({ sort }: SortParam<PlantEnviroment, 'title'> = {}): Promise<
    PlantEnviroment[]
  > {
    return Promise.resolve([
      { key: 'living_room', title: 'Sala' },
      { key: 'bedroom', title: 'Quarto' },
      { key: 'kitchen', title: 'Cozinha' },
      { key: 'bathroom', title: 'Banheiro' },
    ]).then(sortItems(sort?.field ?? 'key', sort?.order));
  }
}
