import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

interface CreateProductParams{
  title: string;
}

@Injectable()
export class PurchaseService{
  constructor(private prisma: PrismaService){};

  async listPurchases(){
    return await this.prisma.purchase.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

}