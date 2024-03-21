import { Query, Resolver } from "@nestjs/graphql";
import { Student } from "../models/student";
import { UseGuards } from "@nestjs/common";
import { AuthorizationGuard } from "src/http/auth/authorization.guard";
import { StudentService } from "src/services/student.service";

@Resolver(() => Student)
export class StudentResolver{
  constructor(private studentService: StudentService){};
  
  @Query(() => [Student])
  @UseGuards(AuthorizationGuard)
  students(){
    return this.studentService.listStudents()
  }
}