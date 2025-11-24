import { Module } from '@nestjs/common';
import { VuelosController } from './vuelos.controller';

@Module({
  controllers: [VuelosController]
})
export class VuelosModule {}
