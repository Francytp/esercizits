import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('nuovo')
export class NuovoController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
