import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  readonly duration: string;

  @IsString()
  readonly todo: string;

  @IsString()
  readonly state: 'uncompleted' | 'completed' | 'discarded';
}
