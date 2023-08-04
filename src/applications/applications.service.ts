import { UsersService } from './../users/users.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Application } from './entities/application.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application) private applicaRepo: Repository<Application>,
    private entityManager: EntityManager,
    private usersService: UsersService,
  ) {}

  async create(createApplicationDto: CreateApplicationDto) {
    const application = this.entityManager.create(
      Application,
      createApplicationDto,
    );
    let userId = createApplicationDto.userId;
    let user = await this.usersService.findOne(userId);
    application.user = user;
    return this.entityManager.save(application);
  }

  async findAll() {
    try {
      const allApplications = await this.applicaRepo.find();
      return allApplications;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.usersService.findOne(id);
      const applications = await this.applicaRepo.find({
        where: { user: { user_id: id } },
      });

      const lastApplication = applications[applications.length - 1];
      return [user, lastApplication];
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  update(id: number, updateApplicationDto: UpdateApplicationDto) {
    return `This action updates a #${id} application`;
  }

  remove(id: number) {
    return `This action removes a #${id} application`;
  }
}
