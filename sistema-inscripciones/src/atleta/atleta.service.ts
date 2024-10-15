import { Injectable, BadRequestException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atleta } from './atleta.entity';
import { Prueba } from '../prueba/prueba.entity';
import { Inscripcion } from '../inscripcion/inscripcion.entity';

@Injectable()
export class AtletaService {
  constructor(
    @InjectRepository(Atleta) private atletaRepository: Repository<Atleta>,
    @InjectRepository(Prueba) private pruebaRepository: Repository<Prueba>,
    @InjectRepository(Inscripcion) private inscripcionRepository: Repository<Inscripcion>,
  ) {}

  // Función para crear un nuevo atleta
  async createAtleta(atletaData: Partial<Atleta>): Promise<Atleta> {
    // Calcular la categoría mínima basada en el año de nacimiento
    const edad = new Date().getFullYear() - atletaData.añoNacimiento;
    let categoria = this.definirCategoria(edad);

    // Guardar el atleta con la categoría mínima
    const nuevoAtleta = this.atletaRepository.create({
      ...atletaData,
      categoria,
    });

    return this.atletaRepository.save(nuevoAtleta);
  }

  // Lógica para definir la categoría basada en la edad
  definirCategoria(edad: number): string {
    if (edad < 14) return 'U14';
    if (edad >= 14 && edad <= 16) return 'U16';
    if (edad >= 17 && edad <= 18) return 'U18';
    if (edad >= 19 && edad <= 20) return 'U20';
    return 'Mayores';
  }

  // Función para inscribir al atleta en una prueba específica
  async inscribirEnPrueba(atletaId: number, pruebaId: number, categoria: string): Promise<Inscripcion> {
    const atleta = await this.atletaRepository.findOne({ where: { id: atletaId } });
    const prueba = await this.pruebaRepository.findOne({ where: { id: pruebaId } });

    if (!atleta || !prueba) {
      throw new Error('Atleta o Prueba no encontrada');
    }

    // Verificar cuántas pruebas ya tiene el atleta inscrito
    const inscripciones = await this.inscripcionRepository.find({
      where: { atleta: { id: atletaId } },
    });

    if (inscripciones.length >= 3) {
      throw new BadRequestException('El atleta ya está inscrito en 3 pruebas. No puede inscribirse en más.');
    }

    const inscripcion = this.inscripcionRepository.create({
      atleta,
      prueba,
      categoria,
    });

    return this.inscripcionRepository.save(inscripcion);
  }



}
