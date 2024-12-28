import { IsBoolean, IsDecimal, IsNumber, IsOptional } from "class-validator";
import { Decimal128 } from "typeorm";

export class CreateOrderDto {

    @IsBoolean()
    estado_pago: boolean;

    @IsNumber()
    @IsOptional()
    precio_final: number;





}
