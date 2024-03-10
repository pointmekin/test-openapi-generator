import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DefaultService } from 'generated';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, DefaultService],
})
export class AppModule {}
