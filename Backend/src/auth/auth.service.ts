import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const user = await this.usersService.findOneByEmail(registerDto.correo);

    if (user) {
      throw new BadRequestException('El usuario ya existe');
    }
    registerDto.contrasenia = await bcrypt.hash(registerDto.contrasenia, 10);

    return await this.usersService.create(registerDto);
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findOneByEmail(loginDto.correo);

    if (!user) {
      throw new UnauthorizedException('Correo no registrado');
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.contrasenia,
      user.contrasenia,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }


    const payload = {correo: user.correo};
    const token = await this.jwtService.signAsync(payload)

    return {
        token,
        correo: user.correo,
    };
  }
}
