import { Repository } from 'typeorm';
import { ProductEntity } from './entity/product.entity';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let repository: Repository<ProductEntity>;

  beforeEach(async () => {
    service = new ProductService(repository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
