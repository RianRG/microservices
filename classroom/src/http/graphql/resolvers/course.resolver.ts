import { Resolver } from "@nestjs/graphql";
import { Student } from "../models/student";
import { Course } from "../models/course";

@Resolver(() => Course)
export class CourseResolver{

}