import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  name: string;
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsOptional()
  @IsString()
  @IsStrongPassword({ minNumbers: 2, minUppercase: 3 })
  password: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
