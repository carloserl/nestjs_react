import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HitsModule } from './hits/hits.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './tasks/tasks.service';
import { HttpModule } from './http/http.module';

@Module({
  imports: [HitsModule, HttpModule , MongooseModule.forRoot('mongodb://mongo/nest'),ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, TasksService],
})
export class AppModule {}
