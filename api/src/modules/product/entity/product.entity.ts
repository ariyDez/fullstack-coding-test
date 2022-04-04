import { CustomerEntity } from '../../customer/entity/customer.entity';
import { ProductTypeEntity } from '../../product-type/entity/product-type.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum DeliveryStatus {
  PENDING = 'PENDING',
  ORDERED = 'ORDERED',
  SHIPPED = 'SHIPPED',
  CANCELED = 'CANCELED',
}

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column({
    type: 'enum',
    enum: DeliveryStatus,
    default: DeliveryStatus.PENDING,
  })
  deliveryStatus: DeliveryStatus;

  @Column()
  deliveryAddress: string;

  @ManyToOne(
    () => ProductTypeEntity,
    (productType: ProductTypeEntity) => productType.products,
  )
  productType: ProductTypeEntity;

  @ManyToOne(
    () => CustomerEntity,
    (customer: CustomerEntity) => customer.products,
  )
  customer: CustomerEntity;
}
