import { UseGuards } from "@nestjs/common";
import { AuthorizationGuard } from "../../auth/authorization.guard";
import { Query, Resolver, Mutation, Args } from "@nestjs/graphql";
import { Product } from "../models/product";
import { CreateProductInput } from "../inputs/create-product";
import { PurchaseService } from "src/services/purchase.service";
import { Purchase } from "../models/purchase";

@Resolver()
export class PurchaseResolver{
  constructor(private purchase: PurchaseService){};

  @Query(() => [Purchase])
  @UseGuards(AuthorizationGuard)
  purchases(){
    return this.purchase.listPurchases();
  }

}