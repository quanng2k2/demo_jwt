import { Module } from '@nestjs/common';
import { CvUsersService } from './cv_users.service';
import { CvUsersController } from './cv_users.controller';

@Module({
  controllers: [CvUsersController],
  providers: [CvUsersService]
})
export class CvUsersModule {}
