import { Query, ResolveField, Resolver, Root } from "@nestjs/graphql";
import { Student } from "../models/student";
import { UseGuards } from "@nestjs/common";
import { AuthorizationGuard } from "src/http/auth/authorization.guard";
import { StudentService } from "src/services/student.service";
import { EnrollmentService } from "src/services/enrollment.service";
import { CurrentUser } from "src/http/auth/current-user";

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

  // @Query(() => Student)
  // @UseGuards(AuthorizationGuard)
  // me(
  //   @CurrentUser() user: { sub: string }
  // ){
  //   console.log(user.sub)
  //   return this.studentService.getStudentByAuthUserId(user.sub);
  // }

  @ResolveField()
  enrollments(@Root() student: Student){
    return this.enrollmentService.getEnrollmentByStudentId(student.id)
  }

}