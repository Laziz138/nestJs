import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    let user = await this.userRepo.create(createUserDto);
    user = await this.userRepo.save(user);
    return user;
  }

  findAll() {
    return this.userRepo;
  }

  findOne(id: number): any {
    return this.findOne(id);
  }
  async validateUser(username: string, password: string) {
    const user = await this.userRepo.findOneBy({ username });
    if (!user) throw new NotFoundException('User yoq');
    if (user.password === password) throw new BadRequestException('parol xato');
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
