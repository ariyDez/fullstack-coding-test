import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';
import { CustomerModule } from './modules/customer/customer.module';
import { ProductTypeModule } from './modules/product-type/product-type.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ProductModule,
    CustomerModule,
    ProductTypeModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
