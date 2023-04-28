import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NextFunction } from 'express';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  

  const config = new DocumentBuilder()
    .setTitle('hotelsystem api')
    .setDescription('The Hotel-System API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

  await app.listen(3333);
  console.log("listening from port 3333")

}

bootstrap();
