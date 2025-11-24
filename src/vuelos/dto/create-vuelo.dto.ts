import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateVueloDto {
   
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
