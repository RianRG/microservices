import { Query, ResolveField, Resolver, Root } from "@nestjs/graphql";
import { Student } from "../models/student";
import { UseGuards } from "@nestjs/common";
import { AuthorizationGuard } from "src/http/auth/authorization.guard";
import { StudentService } from "src/services/student.service";
import { EnrollmentService } from "src/services/enrollment.service";

@Resolver(() => Student)
export class StudentResolver{
  constructor(
    private studentService: StudentService,
    private enrollmentService: EnrollmentService
    ){};
  
  @Query(() => [Student])
  @UseGuards(AuthorizationGuard)
  students(){
    return this.studentService.listStudents()
  }

  @ResolveField()
  enrollments(@Root() student: Student){
    return this.enrollmentService.getEnrollmentByStudentId(student.id)
  }
}