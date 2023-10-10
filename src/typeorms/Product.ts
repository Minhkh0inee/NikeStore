import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['productName'])
export class Product {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column({
    nullable: false,
    default: '',
  })
  productName: string;

  @Column({
    nullable: false,
    default: '',
  })
  productType: string;


  @Column({
    nullable: false,
    default: '1',
  })
  color: string;

  @Column({
    nullable: false,
    default: '0',
  })
  prices: string;

  @Column({
    nullable: false,
    default: 'standard',
  })
  fit: string;

  @Column({
    nullable: false,
    default: 'men',
  })
  gender: string;

  @Column({
    nullable: false,
    default: 'test',
  })
  productImg: string;
}
