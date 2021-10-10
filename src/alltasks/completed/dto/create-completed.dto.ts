import { IsString } from 'class-validator';

export class CreateCompletedDto {
  @IsString()
  duration: string;

  @IsString()
  todo: string;

  @IsString()
  createdBy: string;
}
