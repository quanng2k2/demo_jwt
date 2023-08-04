import { Injectable } from '@nestjs/common';
import { CreateCvUserDto } from './dto/create-cv_user.dto';
import { UpdateCvUserDto } from './dto/update-cv_user.dto';

@Injectable()
export class CvUsersService {
  create(createCvUserDto: CreateCvUserDto) {
    return 'This action adds a new cvUser';
  }

  findAll() {
    return `This action returns all cvUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cvUser`;
  }

  update(id: number, updateCvUserDto: UpdateCvUserDto) {
    return `This action updates a #${id} cvUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} cvUser`;
  }
}
