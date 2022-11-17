import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb+srv://breaper03:G1br32l*-@cluster0.heeux3z.mongodb.net/api', {
      retryAttempts: 4
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
