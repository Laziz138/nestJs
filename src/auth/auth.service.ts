import { Injectable } from '@nestjs/common';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/create-auth.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private UserService: UsersService,
    private JWTService: JwtService,
  ) {}
  async login(LoginDto: LoginDto) {
    const user = await this.UserService.validateUser(
      LoginDto.username,
      LoginDto.password,
    );
    let token = await this.JWTService.sign({
      id: user.id,
      role: user.role,
      username: user.username,
    });
    return { user, token };
  }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
