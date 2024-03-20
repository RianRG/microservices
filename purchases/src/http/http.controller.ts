import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthorizationGuard } from "./auth/authorization.guard";
import { PrismaService } from "src/database/prisma/prisma.service";

@Controller('t')
export class TestController{
  constructor(private prisma: PrismaService){};
  @Get()
  @UseGuards(AuthorizationGuard)
  hello(){
    return this.prisma.customer.findMany()
  }
}