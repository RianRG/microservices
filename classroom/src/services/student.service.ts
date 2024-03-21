import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

@Injectable()
export class StudentService{
  constructor(private prisma: PrismaService){};

  async listStudents(){
    return await this.prisma.student.findMany();
  }

  async getStudentById(id: string){
    return await this.prisma.student.findUnique({
      where: {
        id
      }
    })
  }

  async getStudentByAuthUserId(authUserId: string){
    return await this.prisma.student.findFirst({
      where: {
        authUserId
      }
    })
  }
}