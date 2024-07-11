import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { JsxTransform } from './jsx-transform.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @JsxTransform()
  getHello(@Query('value') value: string = 'Hello, World') {
    return this.appService.getHello(value);
  }
}
