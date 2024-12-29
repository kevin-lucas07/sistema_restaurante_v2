import { IsBoolean, IsDecimal, IsNumber, IsOptional, Matches, Min } from "class-validator";
import { Decimal128 } from "typeorm";

export class CreateOrderDto {

    @IsBoolean()
    estado_pago: boolean;

    @IsNumber({},{message: 'El precio debe ser un numero válido'})
    @Min(0, { message: 'El precio no puede ser negativo' })
    precio_final: number;





}
