import { Query, Resolver, Mutation, Args } from "@nestjs/graphql";
import { Course } from "../models/course";
import { CourseService } from "src/services/course.service";
import { UseGuards } from "@nestjs/common";
import { AuthorizationGuard } from "src/http/auth/authorization.guard";
import { CreateCourseInput } from "../inputs/create-course";
import { CurrentUser } from "src/http/auth/current-user";
import { EnrollmentService } from "src/services/enrollment.service";
import { StudentService } from "src/services/student.service";

@Resolver(() => Course)
export class CourseResolver{
  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private studentService: StudentService
  ){};

  @Query(() => [Course])
  @UseGuards(AuthorizationGuard)
  courses(){
    return this.courseService.listCourses()
  }

  @Query(() => Course)
  @UseGuards(AuthorizationGuard)
  async course(
    @Args('id') id: string,
    @CurrentUser() user: { sub: string }
  ){
    const student = await this.studentService.getStudentByAuthUserId(user.sub)

    if(!student)
      throw new Error('Student not found!')

    const enrollment = await this.enrollmentService.getEnrollmentByCourseAndStudentId({
      courseId: id,
      studentId: student.id 
    });

    if(!enrollment)
      throw new Error('Does not exist an enrollment with this product!')

    return this.courseService.getCourseById(id)
  }

  @Mutation(() => Course)
  @UseGuards(AuthorizationGuard)
  createCourse(@Args('data') data: CreateCourseInput){
    return this.courseService.createCourse(data);
  }
}