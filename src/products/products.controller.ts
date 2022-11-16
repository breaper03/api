import { Controller, Get, Post, Body, Param, Delete, HttpStatus, NotFoundException } from '@nestjs/common';
import { Put, Res } from '@nestjs/common/decorators';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './shared/dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  
  @Get()
  async findAll(@Res() res) {
    const products = await this.productsService.findAll()
    return res.status(HttpStatus.OK).json({
      products
    })
  }
  
  @Get(':id')
  async findOne(@Param('id') _id: string, @Res() res) {
    const product = await this.productsService.findOne(_id);
    if (!product ) throw new NotFoundException('Product not Exist')
      return res.status(HttpStatus.OK).json({
      product
    })
  }

  @Post('/create')
  async create(@Body() createProductDto: CreateProductDto, @Res() res) {
    const product = await this.productsService.create(createProductDto);
    return res.status(HttpStatus.OK).json({
      message: `received...`,
      product: product
    })
  }
  
  @Put(':id')
  update(@Param('id') _id: string, @Body() updateProductDto: UpdateProductDto, @Res() res) {
    const product = this.productsService.update(_id, updateProductDto);
    if (!product ) throw new NotFoundException('Product not Exist')
    return res.status(HttpStatus.OK).json({
      message: `updated...`,
      product
    })
  }

  @Delete(':id')
  remove(@Param('id') _id: string, @Res() res) {
    const product = this.productsService.delete(_id)
    if (!product ) throw new NotFoundException('Product not Exist')
    return res.status(HttpStatus.OK).json({
      product
    })
  }
}
