import { IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  status: string;
}
