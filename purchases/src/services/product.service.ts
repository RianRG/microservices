import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

@Injectable()
export class ProductService{
  constructor(private prisma: PrismaService){};

  async listProducts(){
    return await this.prisma.product.findMany();
  }
}