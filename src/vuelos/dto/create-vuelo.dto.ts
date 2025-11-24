import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateVueloDto {
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
