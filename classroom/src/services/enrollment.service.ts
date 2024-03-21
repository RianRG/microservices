import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

@Injectable()
export class EnrollmentService{
  constructor(private prisma: PrismaService){};

  async listEnrollments(){
    return await this.prisma.enrollment.findMany({
      where: {
        canceledAt: null
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  }
}