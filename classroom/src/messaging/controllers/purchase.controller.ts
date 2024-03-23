import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";


export interface Product {
  id: string;
  title: string;
  slug: string;
}

export interface Customer {
  authUserId: string;
}
export interface PurchaseCreatedParams {
  customer: Customer;
  product: Product;
}

@Controller()
export class PurchaseController{
  @EventPattern('purchases.create-purchase')
  async purchaseCreated(
    @Payload() payload: PurchaseCreatedParams
  ){
    console.log(payload);
  }
}