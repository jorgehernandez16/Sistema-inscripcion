import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prueba } from './prueba.entity';

@Injectable()
export class PruebaService {
  constructor(
    @InjectRepository(Prueba)
    private pruebaRepository: Repository<Prueba>,
  ) {}

  // Función para crear una nueva prueba
  async createPrueba(nombre: string, tipo: string, descripcion: string): Promise<Prueba> {
    const nuevaPrueba = this.pruebaRepository.create({ nombre, tipo, descripcion });
    return this.pruebaRepository.save(nuevaPrueba);
  }

  // Función para obtener todas las pruebas disponibles
  async getPruebas(): Promise<Prueba[]> {
    return this.pruebaRepository.find();
  }
}
