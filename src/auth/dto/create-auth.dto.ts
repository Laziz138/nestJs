import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ default: 'nima' })
  username: string;
  @ApiProperty({ default: 'NIAm1128' })
  password: string;
}
