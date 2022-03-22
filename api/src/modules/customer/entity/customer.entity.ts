import { ProductEntity } from '../../product/entity/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'customer' })
export class CustomerEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  name: string;

  @Column()
  contactNumber: string;

  @OneToMany(() => ProductEntity, (product: ProductEntity) => product.customer)
  products: ProductEntity[];
}
