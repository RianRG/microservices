import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from 'src/database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import path, { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { StudentResolver } from './graphql/resolvers/student.resolver';
import { EnrollmentResolver } from './graphql/resolvers/enrollment.resolver';
import { CourseResolver } from './graphql/resolvers/course.resolver';
import { StudentService } from 'src/services/student.service';
import { EnrollmentService } from 'src/services/enrollment.service';
import { CourseService } from 'src/services/course.service';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    })
  ],
  providers: [
    StudentResolver,
    StudentService,

    EnrollmentResolver,
    EnrollmentService,

    CourseResolver,
    CourseService
  ]
})
export class HttpModule {}
