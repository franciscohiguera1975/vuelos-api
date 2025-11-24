import { IsBoolean, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateVueloDto {

      @IsString()
      origen: string;
  
      @IsString()
      destino: string;
  
      @IsDate()
      fecha: Date;
  
      @IsNumber()
      precio: number;
  
      @IsNumber()
      asientosDisponibles: number;
  
      @IsBoolean()
      estado: boolean;
}
