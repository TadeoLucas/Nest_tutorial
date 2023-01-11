import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHelloWorld();
  }

  // @Get('/:name/:age')    // recive todos los parametros que quiera
  // getParams(@Param() params): string {
  //   const { name, age } = params
  //   return `Bringing ${name}, aged: ${age} years`
  // }
}
