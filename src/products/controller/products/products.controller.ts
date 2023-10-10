import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { ProductsService } from "../../service/products/products.service";
import { CreateProductDto } from "../../dtos/CreateProduct.dto";
import { Role } from "../../../typeorms/role.enum";
import { Roles } from "../../../typeorms/role.decorator";
import { UpdateProductDto } from "../../dtos/UpdateProduct.dto";
import { Product } from "../../../typeorms";
import { Public } from "../../../auth/auth.guard";

@Controller("products")
export class ProductsController {
  constructor(private productService: ProductsService) {
  }


  @Roles(Role.ADMIN)
  @Post("create")
  @UsePipes(ValidationPipe)
  createProduct(@Body() createProductDto: CreateProductDto, @Request() req) {
    return this.productService.createProducts(createProductDto);
  }

  @Roles(Role.ADMIN)
  @Delete("delete/:id")
  async deleteProductById(@Param("id") id: number) {
    return await this.productService.deleteProductById(id);
  }


  @Roles(Role.ADMIN)
  @Put('update/:id')
  update(@Param('id') id: number, @Body() productDto: UpdateProductDto){
    return this.productService.updateProductById(id, productDto);
  }

  @Public()
  @Get("list")
  getProductList() {
    return this.productService.findAll();
  }

  @Public()
  @Get(":id")
  async getProductById(@Param('id') id: number) {
    try {
      return await this.productService.findOne(id);
    } catch (e) {
      throw new BadRequestException(e.message)
    }
  }


}
