import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/:name/:age')
  getParams(@Param() params): string {
    return `Bringing ${params.name}, aged: ${params.age} years`
  }
}
