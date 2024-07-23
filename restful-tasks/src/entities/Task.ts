import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;

  @Column()
  priority!: number;

  @Column()
  status!: string;

  @Column()
  focusSessionId!: number;

  @Column({ nullable: true })
  createdAt?: number;
}
