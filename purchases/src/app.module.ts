import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [DatabaseModule, HttpModule],
  providers: [PrismaService],
})
export class AppModule {}
