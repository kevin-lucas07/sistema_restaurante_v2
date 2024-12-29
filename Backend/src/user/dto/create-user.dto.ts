import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  // @MinLength(1)
  nombre: string;

  @IsString()
  // @MinLength(1)
  apellido: string;

  @IsString()
  // @MinLength(5)
  usuario: string;

  @IsString()
  // @MinLength(1)
  correo: string;

  @IsString()
  contrasenia: string;

}
