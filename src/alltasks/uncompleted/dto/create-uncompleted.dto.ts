import { IsString } from 'class-validator';

export class CreateUncompletedDto {
  @IsString()
  duration: string;

  @IsString()
  todo: string;

  @IsString()
  createdBy: string;
}
