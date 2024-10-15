import { EntityRepository, Repository } from 'typeorm';
import { Prueba } from './prueba.entity';

@EntityRepository(Prueba)
export class PruebaRepository extends Repository<Prueba> {}
