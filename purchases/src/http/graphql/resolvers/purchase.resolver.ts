import { UseGuards } from "@nestjs/common";
import { AuthorizationGuard } from "../../auth/authorization.guard";
import { Query, Resolver, Mutation, Args, ResolveField, Root, Parent } from "@nestjs/graphql";
import { Product } from "../models/product";
import { CreateProductInput } from "../inputs/create-product";
import { PurchaseService } from "src/services/purchase.service";
import { ProductService } from "src/services/product.service";
import { Purchase } from "../models/purchase";

@Resolver(() => Purchase)
export class PurchaseResolver{
  constructor(
    private purchaseService: PurchaseService,
    private productService: ProductService
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
}