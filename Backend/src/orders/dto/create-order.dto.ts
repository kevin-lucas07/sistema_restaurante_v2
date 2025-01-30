import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';

export class CreateOrderDto {
  @IsBoolean()
  estado_pago: boolean;

  @IsNumber({}, { message: 'El precio debe ser un numero válido' })
  @Min(0.25, { message: 'Verifique el valor de precio final' })
  precio_final: number;

  // @IsNotEmpty({ message: 'El ID de usuario es obligatorio' })
  @IsOptional() // Opcional solo si realmente lo permites en la lógica
  @IsNumber({}, { message: 'El ID del usuario debe ser un número' })
  user_id?: number; // Renombrado para mayor claridad
}
