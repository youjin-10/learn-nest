import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(): string {
    return '/hello'; // this works - then why do we need a service?
    // controller - service
    // controller is for handling requests & responses
    // service is for handling business logic
  }
}
