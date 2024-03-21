import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";
import slugify from 'slugify';

interface CreateCourseParams{
  title: string;
}

@Injectable()
export class CourseService{
  constructor(private prisma: PrismaService){};

  async listCourses(){
    return await this.prisma.course.findMany();
  }

  async getCourseById(id: string){
    return await this.prisma.course.findUnique({
      where: {
        id
      }
    })
  }

  async createCourse({ title }: CreateCourseParams){
    
    const slug = slugify(title, { lower: true });

    const slugAlreadyExists = await this.prisma.course.findFirst({
      where: {
        slug
      }
    })

    if(slugAlreadyExists)
      throw new Error('A product with the same slug already exists!')

    return await this.prisma.course.create({
      data: {
        title,
        slug
      }
    })
  }
}