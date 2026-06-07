import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/v1/hello')
  getHello() {
    return this.appService.getHello();
  }

  @Get('api/v1/goodbye')
  getGoodbye() {
    return this.appService.getGoodbye();
  }

  @Get('api/v1/date')
  getDate() {
    return this.appService.getDate();
  }

  @Get('*')
  get404() {
    return { error: 'Not Found!' };
  }
}
