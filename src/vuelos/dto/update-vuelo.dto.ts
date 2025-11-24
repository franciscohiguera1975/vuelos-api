import { IsBoolean, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateVueloDto {
      @IsString()
      name: string;
      @IsString()
      origin: string;
  
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
