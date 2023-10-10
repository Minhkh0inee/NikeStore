import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  productName: string;

  @IsNotEmpty()
  productType: string;


  @IsNotEmpty()
  color: string;

  @IsNotEmpty()
  prices: string;

  @IsNotEmpty()
  @IsString()
  fit: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsString()
  productImg: string;
}
