import { IsOptional, IsString, MinLength } from "class-validator";

export class CreateEmployeeDto {

    @IsString()
    // @MinLength(1)
    nombre: string;

    @IsString()
    // @MinLength(1)
    apellido: string;

    // @IsString()
    // @MinLength(5)
    usuario: string;

    // @IsString()
    // @MinLength(1)
    correo: string;

    contrasenia: string;

    @IsOptional()
    estado: boolean;


}
