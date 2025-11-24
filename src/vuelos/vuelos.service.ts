import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vuelo } from './vuelo.entity';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { UpdateVueloDto } from './dto/update-vuelo.dto';

@Injectable()
export class VuelosService {
  constructor(
    @InjectRepository(Vuelo)
    private readonly vueloRepository: Repository<Vuelo>,
  ) {}

  create(createVueloDto: CreateVueloDto) {
    const vuelo = this.vueloRepository.create(createVueloDto);
    return this.vueloRepository.save(vuelo);
  }

  findAll() {
    return this.vueloRepository.find();
  }

  findOne(id: string) {
    return this.vueloRepository.findOne({ where: { id } });
  }

  async update(id: string, updateVueloDto: UpdateVueloDto) {
    const vuelo = await this.vueloRepository.findOne({ where: { id } });
    if (!vuelo) return null;
    Object.assign(vuelo, updateVueloDto);
    return this.vueloRepository.save(vuelo);
  }

  async remove(id: string) {
    const vuelo = await this.vueloRepository.findOne({ where: { id } });
    if (!vuelo) return null;
    return this.vueloRepository.remove(vuelo);
  }

  async calculoPromedio(dataBody: any) {
    const precios = dataBody.precios;
    const numeroLimite = dataBody.numeroLimite;
    let size=0
    let suma=0;
    for (const precio of precios){
      if (precio <numeroLimite){
        suma+=precio;
        size++;
      }
    }
    const promedio = suma /size;
    
    return {
      precios: precios,
      promedio: promedio
    };
  }
}
