import { Job } from 'src/jobs/entities/job.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'companies' })
export class Company {
  @PrimaryColumn()
  companyid: string = uuidv4();

  @Column()
  company_name: string;

  @Column({ type: 'text' })
  company_description: string;

  @Column({ type: 'text' })
  logo: string;

  @Column()
  industry: string;

  @Column()
  compa_city: string;

  @ManyToOne(() => User, (user) => user.companies)
  user: User[];

  @OneToMany(() => Job, (job) => job.company) // One company can have many jobs
  jobs: Job[];

  @OneToMany(() => Review, (review) => review.company)
  reviews: Review[];
}
