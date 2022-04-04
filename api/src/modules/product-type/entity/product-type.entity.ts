import { ProductEntity } from '../../product/entity/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product-type' })
export class ProductTypeEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  name: string;

  @OneToMany(
    () => ProductEntity,
    (product: ProductEntity) => product.productType,
  )
  products: ProductEntity[];
}
