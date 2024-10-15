import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PruebaController } from './prueba.controller';
import { PruebaService } from './prueba.service';
import { Prueba } from './prueba.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prueba])],
  controllers: [PruebaController],
  providers: [PruebaService],
})
export class PruebaModule {}
