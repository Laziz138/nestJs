import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(3)
  title: string;
  @IsString()
  @IsNotEmpty()
  author: string;
  @IsNumber()
  id: number;
  @IsNumber()
  @Min(1900)
  @Max(2025)
  year: number;
  @IsBoolean()
  @IsOptional()
  isPublished: boolean = false;
}
