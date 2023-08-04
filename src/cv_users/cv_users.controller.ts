import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CvUsersService } from './cv_users.service';
import { CreateCvUserDto } from './dto/create-cv_user.dto';
import { UpdateCvUserDto } from './dto/update-cv_user.dto';

@Controller('cv-users')
export class CvUsersController {
  constructor(private readonly cvUsersService: CvUsersService) {}

  @Post()
  create(@Body() createCvUserDto: CreateCvUserDto) {
    return this.cvUsersService.create(createCvUserDto);
  }

  @Get()
  findAll() {
    return this.cvUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cvUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCvUserDto: UpdateCvUserDto) {
    return this.cvUsersService.update(+id, updateCvUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cvUsersService.remove(+id);
  }
}
