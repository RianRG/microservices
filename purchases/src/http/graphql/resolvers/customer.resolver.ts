import { Resolver } from "@nestjs/graphql";

@Resolver()
export class CustomerResolver{
  constructor(private customerService){}
}