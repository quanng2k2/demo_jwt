import { v4 as uuidv4 } from 'uuid';
import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity({ name: 'cv_user' })
export class CvUser {
  @PrimaryColumn()
  cv_user_id: string = uuidv4();

  @Column({ type: 'text' })
  cv_file_path: string;

  @ManyToOne(() => User, (user) => user.cvUsers)
  user: User[];
}
