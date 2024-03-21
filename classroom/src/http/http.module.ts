import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TestResolver } from './http.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import path, { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    })
  ],
  providers: [TestResolver]
})
export class HttpModule {}
