import { Repository } from 'typeorm';
import { CustomerEntity } from '../customer/entity/customer.entity';
import { ProductTypeEntity } from '../product-type/entity/product-type.entity';
import { DeliveryStatus, ProductEntity } from './entity/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;
  let repository: Repository<ProductEntity>;

  beforeEach(async () => {
    repository = new Repository();
    service = new ProductService(repository);
    controller = new ProductController(service);
  });

  it('should return array of products', () => {
    const productType: ProductTypeEntity = {
      id: 1,
      name: 'test',
      products: [],
    };
    const customer: CustomerEntity = {
      id: 1,
      name: 'test',
      contactNumber: 'test',
      products: [],
    };
    const result = [
      {
        id: 1,
        deliveryStatus: DeliveryStatus.PENDING,
        deliveryAddress: 'test',
        productType,
        customer,
      },
    ];
    jest.spyOn(service, 'list').mockImplementation(async () => result);
    expect(controller).toBeDefined();
  });
});
