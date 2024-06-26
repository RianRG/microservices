import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

interface GetByCourseAndStudentParams{
  courseId: string;
  studentId: string;
}

interface CreateEnrollmentParams{
  courseId: string;
  studentId: string;
}

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

  async getEnrollmentByStudentId(studentId: string){
    return await this.prisma.enrollment.findMany({
      where: {
        studentId,
        canceledAt: null
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  }

  async getEnrollmentByCourseAndStudentId(
    { courseId, studentId }: GetByCourseAndStudentParams
    ){
      return await this.prisma.enrollment.findFirst({
        where: {
          courseId,
          studentId,
          canceledAt: null
        }
      })
  }

  async createEnrollment({ courseId, studentId }: CreateEnrollmentParams){
    return await this.prisma.enrollment.create({
      data: {
        courseId,
        studentId
      }
    })
  }
}