import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TestController } from './http.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TestController]
})
export class HttpModule {}
