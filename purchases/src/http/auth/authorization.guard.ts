import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { promisify } from 'util';
import { auth } from 'express-oauth2-jwt-bearer'

@Injectable()
export class AuthorizationGuard implements CanActivate {
  private AUTH0_AUDIENCE: string
  private AUTH0_DOMAIN: string
  constructor(private configService: ConfigService){
    this.AUTH0_AUDIENCE = this.configService.get('AUTH0_AUDIENCE') ?? ''
    this.AUTH0_DOMAIN = this.configService.get('AUTH0_DOMAIN') ?? ''
  }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>{
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();

    const checkJwt = promisify(
      auth({
        audience: 'ignite-login-rian',
        issuerBaseURL: this.AUTH0_DOMAIN,
        tokenSigningAlg: 'RS256'
      })
    )

    try{
      await checkJwt(req, res)

      return true
    } catch(err){
      throw new UnauthorizedException(err)
    }

  }
}
