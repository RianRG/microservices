import { UseGuards } from "@nestjs/common";
import { Query, ResolveField, Resolver, Root } from "@nestjs/graphql";
import { CustomerService } from "src/services/customer.service";
import { Customer } from "../models/customer";
import { AuthorizationGuard } from "src/http/auth/authorization.guard";
import { CurrentUser } from "src/http/auth/current-user";
import { PurchaseService } from "src/services/purchase.service";

@Resolver(() => Customer)
export class CustomerResolver{
  constructor(
      private customerService: CustomerService,
      private purchaseService: PurchaseService
    ){}

  @Query(() => Customer)
  @UseGuards(AuthorizationGuard)
  me(
    @CurrentUser() user: { sub: string }
  ){
    return this.customerService.getCustomerByAuthUserId(user.sub);
  }

  @ResolveField()
  purchases(@Root() customer: Customer){
    return this.purchaseService.getMyPurchases(customer.id)
  }
}