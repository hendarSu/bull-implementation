import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BullModule } from 'nest-bull';
import { DoneCallback, Job } from 'bull';

@Module({
  imports: [
    BullModule.register({
      name: 'store',
      options: {
        redis: {
          port: 6379,
        },
      },
      processors: [
        (job: Job, done: DoneCallback) => { done(null, job.data); },
      ],
    }),
  ],
  controllers: [
    AppController,
  ],
})

export class AppModule {}
