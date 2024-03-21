import { UseGuards } from "@nestjs/common";
import { AuthorizationGuard } from "../../auth/authorization.guard";
import { Query, Resolver, Mutation, Args } from "@nestjs/graphql";
import { Product } from "../models/product";
import { ProductService } from "src/services/product.service";
import { CreateProductInput } from "../inputs/create-product";

@Resolver()
export class ProductResolver{
  constructor(private product: ProductService){};

  @Query(() => [Product])
  // @UseGuards(AuthorizationGuard)
  products(){
   return this.product.listProducts();
  }

  @Mutation(() => Product)
  createProduct(@Args('data') data:  CreateProductInput){
    return this.product.createProduct(data)
  }
}