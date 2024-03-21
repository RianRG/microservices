import { Query, Resolver } from "@nestjs/graphql";
import { Course } from "../models/course";
import { CourseService } from "src/services/course.service";
import { UseGuards } from "@nestjs/common";
import { AuthorizationGuard } from "src/http/auth/authorization.guard";

@Resolver(() => Course)
export class CourseResolver{
  constructor(private courseService: CourseService){};

  @Query(() => [Course])
  @UseGuards(AuthorizationGuard)
  courses(){
    return this.courseService.listCourses()
  }
}