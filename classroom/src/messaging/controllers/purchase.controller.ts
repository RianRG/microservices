import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { CourseService } from "src/services/course.service";
import { EnrollmentService } from "src/services/enrollment.service";
import { StudentService } from "src/services/student.service";


export interface Product {
  id: string;
  title: string;
  slug: string;
}

export interface Customer {
  authUserId: string;
}
export interface PurchaseCreatedParams {
  customer: Customer;
  product: Product;
}

@Controller()
export class PurchaseController{

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private studentService: StudentService
  ){};

  @EventPattern('purchases.create-purchase')
  async purchaseCreated(
    @Payload() payload: PurchaseCreatedParams
  ){
    let student = await this.studentService.getStudentByAuthUserId(payload.customer.authUserId);

    if(!student)
      student = await this.studentService.createStudent(payload.customer.authUserId);

    let course = await this.courseService.getCourseBySlug(payload.product.slug);

    if(!course)
      course = await this.courseService.createCourse({
        title: payload.product.title,
        slug: payload.product.slug
    })

    await this.enrollmentService.createEnrollment({
      courseId: course.id,
      studentId: student.id
    })
  }
}