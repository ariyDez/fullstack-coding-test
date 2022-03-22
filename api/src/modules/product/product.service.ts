import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateProductDto } from './dto/update-product.dto';
import { DeliveryStatus, ProductEntity } from './entity/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async list() {
    const products = await this.productRepository.find({
      relations: ['customer', 'productType'],
    });

    console.log({ products });
    return products;
  }

  async updateProduct(id: number, updateDto: UpdateProductDto) {
    const values: string[] = Object.values(DeliveryStatus);
    if (!values.includes(updateDto.status)) {
      throw new BadRequestException('Status does not exists!');
    }
    return this.productRepository.update(id, {
      deliveryStatus:
        DeliveryStatus[updateDto.status as keyof typeof DeliveryStatus],
    });
  }
}
