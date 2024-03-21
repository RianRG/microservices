import { UseGuards } from "@nestjs/common";
import { AuthorizationGuard } from "../../auth/authorization.guard";
import { Query, Resolver, Mutation, Args, ResolveField, Root, Parent, Context } from "@nestjs/graphql";
import { PurchaseService } from "src/services/purchase.service";
import { ProductService } from "src/services/product.service";
import { Purchase } from "../models/purchase";
import { CreatePurchaseInput } from "../inputs/create-purchase";
import { CurrentUser } from "src/http/auth/current-user";
import { CustomerService } from "src/services/customer.service";

@Resolver(() => Purchase)
export class PurchaseResolver{
  constructor(
    private purchaseService: PurchaseService,
    private productService: ProductService,
    private customerService: CustomerService
    ){};

  @Query(() => [Purchase])
  @UseGuards(AuthorizationGuard)
  purchases(){
    return this.purchaseService.listPurchases();
  }

  @ResolveField()
  product(@Root() purchase: Purchase){
    return this.productService.getProductById(purchase.productId)
  }

  @Mutation(() => Purchase)
  @UseGuards(AuthorizationGuard)
  async createPurchase(
    @Args('data') data: CreatePurchaseInput,
    @CurrentUser() user: { sub: string }
    ){
      let customer = await this.customerService.getCustomerByAuthUserId(user.sub)

      if(!customer)
        customer = await this.customerService.createCustomer({ authUserId: user.sub })

      return this.purchaseService.createPurchase({
          customerId: customer.id,
          productId: data.productId
      })
  }
}