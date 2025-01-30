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

  // @IsNotEmpty({ message: 'El ID de usuario es obligatorio' })
  @IsOptional() // Opcional solo si realmente lo permites en la lógica
  @IsNumber({}, { message: 'El ID del usuario debe ser un número' })
  user_id?: number; // Renombrado para mayor claridad
}
