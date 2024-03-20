import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TestController } from './http.controller';
import { DatabaseModule } from 'src/database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql') 
    })
  ],
  controllers: [TestController]
})
export class HttpModule {}
