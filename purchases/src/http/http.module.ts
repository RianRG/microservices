import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { ProductResolver } from './graphql/resolvers/product.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { ProductService } from 'src/services/product.service';
import { PurchaseResolver } from './graphql/resolvers/purchase.resolver';
import { PurchaseService } from 'src/services/purchase.service';
import { CustomerService } from 'src/services/customer.service';
import { CustomerResolver } from './graphql/resolvers/customer.resolver';
import { MessagingModule } from 'src/messaging/messaging.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    DatabaseModule,
    MessagingModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    })
  ],
  providers: [
    ProductResolver, 
    ProductService,

    PurchaseResolver,
    PurchaseService,

    CustomerResolver,
    CustomerService
  ]
})
export class HttpModule {}
