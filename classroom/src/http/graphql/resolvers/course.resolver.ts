import { Resolver } from "@nestjs/graphql";
import { Course } from "../models/course";
import { CourseService } from "src/services/course.service";

@Resolver(() => Course)
export class CourseResolver{
  constructor(private courseService: CourseService){};

}