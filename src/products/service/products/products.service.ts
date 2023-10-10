import {
  BadRequestException,
  Injectable,
  NotFoundException
} from "@nestjs/common";
import { Product } from "../../types/Product";
import { CreateProductDto } from "../../dtos/CreateProduct.dto";
import { Product as ProductEntity } from "../../../typeorms";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { UpdateProductDto } from "../../dtos/UpdateProduct.dto";
import { Observable } from "rxjs";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>
  ) {
  }

  async checkProductExistByProductName(productName: string): Promise<boolean> {
    const existProduct = await this.productRepository.findOneBy({
      productName
    });

    return !!existProduct;
  }

  async createProducts(createProductDTO: CreateProductDto) {
    const { productName } = createProductDTO;
    const existProduct = await this.checkProductExistByProductName(productName);

    if (existProduct) {
      throw new BadRequestException("Name of product had been used");
    }
    const newProduct = this.productRepository.create(createProductDTO);
    return this.productRepository.save(newProduct);
  }

  async deleteProductById(productId: number): Promise<any> {
    return await this.productRepository.delete(productId);

  }

  async updateProductById(productId: number, updateProductDto: UpdateProductDto) {
    await this.productRepository.update(productId, updateProductDto);
    return this.findOne(productId);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(productId: number): Promise<ProductEntity> {
    return this.productRepository.findOne({ where: { productId: productId } });

  }


}
