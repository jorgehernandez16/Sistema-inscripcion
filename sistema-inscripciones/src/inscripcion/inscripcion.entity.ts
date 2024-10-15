import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Atleta } from '../atleta/atleta.entity';
import { Prueba } from '../prueba/prueba.entity';

@Entity()
export class Inscripcion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Atleta)
  atleta: Atleta;

  @ManyToOne(() => Prueba)
  prueba: Prueba;

  @Column()
  categoria: string;  // La categoría en la que participa en esta prueba
}
