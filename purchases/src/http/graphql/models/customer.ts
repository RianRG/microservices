import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Purchase } from "./purchase";

@ObjectType()
export class Customer{
  @Field(() => ID)
  id: string

  @Field()
  authUserId: string

  @Field(() => Date)
  createdAt: Date

  @Field(() => [Purchase])
  purchases: Purchase[]
}