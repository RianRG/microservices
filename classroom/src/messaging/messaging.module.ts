import { Module } from '@nestjs/common';
import { PurchaseController } from './controllers/purchase.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CourseService } from 'src/services/course.service';
import { StudentService } from 'src/services/student.service';
import { EnrollmentService } from 'src/services/enrollment.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchaseController],
  providers: [CourseService, StudentService, EnrollmentService]
})
export class MessagingModule {}
