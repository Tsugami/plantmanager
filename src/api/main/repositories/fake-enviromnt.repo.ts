import { PlantEnviroment } from '../../domain/entities/plant-enviroment';
import PlantEnviromentRepo from '../../domain/repositories/plant-enviroment-repo';

export default class FakeEnviromentRepo implements PlantEnviromentRepo {
  fetchPlantEnviroment(): Promise<PlantEnviroment[]> {
    return Promise.resolve([
      { key: 'living_room', title: 'Sala' },
      { key: 'bedroom', title: 'Quarto' },
      { key: 'kitchen', title: 'Cozinha' },
      { key: 'bathroom', title: 'Banheiro' },
    ]);
  }
}
