import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { MongooseModule } from '@nestjs/mongoose';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  const DB = MongooseModule
  const options = new DocumentBuilder()
  .setTitle('API')
  .build()

  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('api', app, document)

  await app.listen(3331);
}
bootstrap();
