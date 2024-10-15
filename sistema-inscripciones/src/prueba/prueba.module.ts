import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PruebaController } from './prueba.controller';
import { PruebaService } from './prueba.service';
import { Prueba } from './prueba.entity';
import { PruebaRepository } from './prueba.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Prueba])],
  controllers: [PruebaController],
  providers: [PruebaService, PruebaRepository],
  exports: [PruebaService, PruebaRepository],
})
export class PruebaModule {}
