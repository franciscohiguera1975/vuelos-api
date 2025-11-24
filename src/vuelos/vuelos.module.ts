import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VuelosService } from './vuelos.service';
import { VuelosController } from './vuelos.controller';
import { Vuelo } from './vuelo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vuelo])],
  controllers: [VuelosController],
  providers: [VuelosService],
})
export class VuelosModule {}
