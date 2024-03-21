import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Product } from "./product";

enum PurchaseStatus{
  PENDING='PENDING',
  COMPLETE='COMPLETE',
  FAILED='FAILED'
}

registerEnumType(PurchaseStatus, {
  name: 'PurchaseStatus',
  description: 'Purchase statuses'
})

@ObjectType()
export class Purchase{

  @Field(() => ID)
  id: string;

  @Field()
  status: PurchaseStatus;

  @Field(() => Date)
  createdAt: Date

  @Field(() => Product)
  product: Product

  productId: string
}