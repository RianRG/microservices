import { UseGuards } from "@nestjs/common";
import { AuthorizationGuard } from "../../auth/authorization.guard";
import { PrismaService } from "src/database/prisma/prisma.service";
import { Query, Resolver } from "@nestjs/graphql";
import { Product } from "../models/product";
import { ProductService } from "src/services/product.service";

@Resolver()
export class ProductResolver{
  constructor(private product: ProductService){};

  @Query(() => [Product])
  // @UseGuards(AuthorizationGuard)
  products(){
   return this.product.listProducts();
  }
}