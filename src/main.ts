import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // pipe is a middleware that will be executed before the request handler
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // will remove any other properties that are not in the DTO
      forbidNonWhitelisted: true, // will throw an error if there are properties that are not in the DTO
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
