import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Completed {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  duration: string;

  @Column()
  todo: string;

  @Column()
  createdBy: string;

  @CreateDateColumn()
  createdAt: Date;
}
