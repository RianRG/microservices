import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { ProductResolver } from './graphql/resolvers/products.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import path, { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { ProductService } from 'src/services/product.service';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    })
  ],
  providers: [ProductResolver, ProductService]
})
export class HttpModule {}
