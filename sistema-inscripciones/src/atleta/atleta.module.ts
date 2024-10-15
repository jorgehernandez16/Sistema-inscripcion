import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtletaController } from './atleta.controller';
import { AtletaService } from './atleta.service';
import { Atleta } from './atleta.entity';
import { PruebaModule } from 'src/prueba/prueba.module';
import { AtletaRepository } from './atleta.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Atleta]), PruebaModule],
  controllers: [AtletaController],
  providers: [AtletaService, AtletaRepository],
})
export class AtletaModule {}
