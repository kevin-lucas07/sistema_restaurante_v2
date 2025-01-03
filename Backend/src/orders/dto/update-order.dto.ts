import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class UpdateOrderDto {
  @IsBoolean()
  @IsOptional()
  estado_pago: boolean;

  @IsNumber({}, { message: 'El precio debe ser un numero válido' })
  @Min(0, { message: 'El precio no puede ser negativo' })
  @IsOptional()
  precio_final: number;

  @IsString()
  @IsOptional()
  users?: string;
}
