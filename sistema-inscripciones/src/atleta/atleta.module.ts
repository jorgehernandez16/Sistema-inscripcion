import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtletaController } from './atleta.controller';
import { AtletaService } from './atleta.service';
import { Atleta } from './atleta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Atleta])],
  controllers: [AtletaController],
  providers: [AtletaService],
})
export class AtletaModule {}
