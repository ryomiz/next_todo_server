import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Discarded {
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
