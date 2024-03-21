import { Resolver } from "@nestjs/graphql";
import { Enrollment } from "../models/enrollment";
import { EnrollmentService } from "src/services/enrollment.service";

@Resolver(() => Enrollment)
export class EnrollmentResolver{
  constructor(private enrollmentService: EnrollmentService){};
}