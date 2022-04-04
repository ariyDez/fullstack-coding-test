import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('list')
  async getList() {
    return this.productService.list();
  }

  @Put(':id')
  async update(@Param() id: number, @Body() body: UpdateProductDto) {
    return this.productService.updateProduct(id, body);
  }
}
