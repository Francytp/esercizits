import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NuovoController } from './nuovo-controller';

@Module({
  imports: [],
  controllers: [AppController, NuovoController],
  providers: [AppService],
})
export class AppModule {}
