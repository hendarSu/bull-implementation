import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { Job, Queue} from 'bull';
import { InjectQueue } from 'nest-bull';

@Controller()
export class AppController {

  constructor(
    @InjectQueue('store') readonly queue: Queue,
  ) {}

  @Post()
  async addJob( @Body() value: any ) {
    const job: Job = await this.queue.add(value);
    return job.id;
  }

  @Get(':id')
  async getJob( @Param('id') id: string ) {
    return await this.queue.getJob(id);
  }
}
