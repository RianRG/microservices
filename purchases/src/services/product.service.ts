import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import slugify from 'slugify';

interface CreateProductParams{
  title: string;
}

@Injectable()
export class ProductService{
  constructor(private prisma: PrismaService){};

  async listProducts(){
    return await this.prisma.product.findMany();
  }

  async createProduct({ title }: CreateProductParams){
    const slug = slugify(title, { lower: true });

    const productWithSameSlug = await this.prisma.product.findFirst({
      where: {
        slug
      }
    })

    if(productWithSameSlug)
      throw new Error('This product already exists!');

    return await this.prisma.product.create({
      data: {
        title,
        slug
      }
    })
  }
}