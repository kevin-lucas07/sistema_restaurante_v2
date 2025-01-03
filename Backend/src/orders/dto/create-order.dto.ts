import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateOrderDto {
  @IsBoolean()
  estado_pago: boolean;

  @IsNumber({}, { message: 'El precio debe ser un numero válido' })
  @Min(0, { message: 'El precio no puede ser negativo' })
  precio_final: number;

  @IsString()
  @IsOptional()
  users?: string;
}
