import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Enrollment } from "./enrollment";

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "authUserId")')
export class Student{
  id: string

  @Field(() => ID)
  @Directive('@external')
  authUserId: string

  @Field(() => [Enrollment])
  enrollments: Enrollment[]
}