import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthorizationGuard } from "./auth/authorization.guard";

@Controller('t')
export class TestController{
  @Get()
  @UseGuards(AuthorizationGuard)
  hello(){
    return 'hi'
  }
}