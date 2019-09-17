import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as winston from 'winston';
import { Loggly } from 'winston-loggly-bulk';

async function bootstrap() {
  winston.add(new Loggly({
    token: 'loggly-token',
    subdomain: 'clodeo-shipping',
    tags: ['Winston-NestJS'],
    json: true,
  }));

  const data = {
    res: {
      statusCode : 200,
    },
    req : {
      url : '/:id',
      headers : {
        'host': 'localhost:3200',
        'connection': 'keep-alive',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
        'upgrade-insecure-requests': '1',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'cookie': '_ga=GA1.1.152534904.1515255925; __smToken=Z9sAgnI0y5w6cUXLMOswxVzQ',
        'if-none-match': 'W/\'c-Lve95gjOVATpfV8EL5X4nxwjKHE\'',
      },
      method : 'GET',
      httpVersion : '1.1',
      originalUrl : '/:id',
      query : { }
    },
    level : 'info',
    message : 'HTTP GET /:id',
  };

  winston.info('Info', data);
  const app = await NestFactory.create(AppModule);
  await app.listen(3200);
}
bootstrap();
