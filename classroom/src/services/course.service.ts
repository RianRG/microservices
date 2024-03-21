import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

@Injectable()
export class CourseService{
  constructor(private prisma: PrismaService){};

  async listCourses(){
    return await this.prisma.course.findMany();
  }
}