import { v4 as uuidv4 } from 'uuid';
import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm';
import { Company } from 'src/companies/entities/company.entity';

@Entity({ name: 'jobs' })
export class Job {
  @PrimaryColumn()
  job_id: string = uuidv4();

  @Column({ type: 'text' })
  descriptions: string;

  @Column({ type: 'text' })
  location: string;

  @Column()
  salary: string;

  @Column({ type: 'text' })
  experience_level: string;

  @Column({ type: 'text' })
  required_skills: string;

  @ManyToOne(() => Company, (company) => company.jobs)
  company: Company[];
}
