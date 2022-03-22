import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTypeEntity } from './entity/product-type.entity';
import { ProductTypeService } from './product-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductTypeEntity])],
  providers: [ProductTypeService],
})
export class ProductTypeModule {}
