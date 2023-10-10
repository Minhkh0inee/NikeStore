import { Module } from '@nestjs/common';
import { ProductsController } from './controller/products/products.controller';
import { ProductsService } from './service/products/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../typeorms';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
