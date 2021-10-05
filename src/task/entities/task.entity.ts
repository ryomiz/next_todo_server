import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  duration: string;

  @Column()
  todo: string;

  @Column()
  state: 'uncompleted' | 'completed' | 'discarded';
}
