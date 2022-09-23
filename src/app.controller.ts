import {
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';

@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @CacheKey('someKey')
  @CacheTTL(60)
  async getHello() {
    return this.appService.getHello();
  }
}
