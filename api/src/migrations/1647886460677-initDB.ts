import { CustomerEntity } from 'src/modules/customer/entity/customer.entity';
import { ProductTypeEntity } from 'src/modules/product-type/entity/product-type.entity';
import {
  DeliveryStatus,
  ProductEntity,
} from 'src/modules/product/entity/product.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class initDB1647886460677 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const customer = await queryRunner.manager.save(
      queryRunner.manager.create<CustomerEntity>(CustomerEntity, {
        name: 'test_customer',
        contactNumber: 'contact_number',
      }),
    );
    const productType = await queryRunner.manager.save(
      queryRunner.manager.create<ProductTypeEntity>(ProductTypeEntity, {
        name: 'test_type',
      }),
    );
    await queryRunner.manager.save(
      queryRunner.manager.create<ProductEntity>(ProductEntity, {
        deliveryStatus: DeliveryStatus.PENDING,
        deliveryAddress: 'Test',
        customer: customer,
        productType: productType,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM customer');
    await queryRunner.query('DELETE * FROM product-type');
    await queryRunner.query('DELETE * FROM product');
  }
}
