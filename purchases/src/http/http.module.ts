import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { ProductResolver } from './graphql/resolvers/product.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { ProductService } from 'src/services/product.service';
import { PurchaseResolver } from './graphql/resolvers/purchase.resolver';
import { PurchaseService } from 'src/services/purchase.service';
import { CustomerService } from 'src/services/customer.service';

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
    ProductResolver, 
    ProductService,

    PurchaseResolver,
    PurchaseService,

    CustomerService
  ]
})
export class HttpModule {}
