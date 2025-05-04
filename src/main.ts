import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  const builder = await new DocumentBuilder().setTitle('Api').build();
  const factory = SwaggerModule.createDocument(app, builder);
  SwaggerModule.setup('docs', app, factory);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
