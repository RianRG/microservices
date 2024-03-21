import { Query, ResolveField, Resolver, Root } from "@nestjs/graphql";
import { Enrollment } from "../models/enrollment";
import { EnrollmentService } from "src/services/enrollment.service";
import { UseGuards } from "@nestjs/common";
import { AuthorizationGuard } from "src/http/auth/authorization.guard";
import { CourseService } from "src/services/course.service";
import { StudentService } from "src/services/student.service";

@Resolver(() => Enrollment)
export class EnrollmentResolver{
  constructor(
    private enrollmentService: EnrollmentService,
    private courseService: CourseService,
    private studentService: StudentService
  ){};

  @Query(() => [Enrollment])
  @UseGuards(AuthorizationGuard)
  enrollments(){
    return this.enrollmentService.listEnrollments()
  }

  @ResolveField()
  course(@Root() enrollment: Enrollment){
    return this.courseService.getCourseById(enrollment.courseId)
  }

  @ResolveField()
  student(@Root() enrollment: Enrollment){
    return this.studentService.getStudentById(enrollment.studentId)
  }
}