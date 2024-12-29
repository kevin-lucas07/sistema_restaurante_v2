import { IsOptional, IsString } from 'class-validator';

export class UpdateEmployeeDto {
  @IsString()
  // @MinLength(1)
  @IsOptional()
  nombre: string;

  @IsString()
  // @MinLength(1)
  @IsOptional()
  apellido: string;

  @IsString()
  // @MinLength(5)
  @IsOptional()
  usuario: string;

  @IsString()
  // @MinLength(1)
  @IsOptional()
  correo: string;

  @IsString()
  @IsOptional()
  contrasenia: string;
}
