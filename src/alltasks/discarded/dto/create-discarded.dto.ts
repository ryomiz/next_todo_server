import { IsString } from 'class-validator';

export class CreateDiscardedDto {
  @IsString()
  duration: string;

  @IsString()
  todo: string;

  @IsString()
  createdBy: string;
}
