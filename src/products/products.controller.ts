import { Controller, Get, Post, Body, Param, Delete, HttpStatus } from '@nestjs/common';
import { Put, Res } from '@nestjs/common/decorators';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './shared/dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  
  @Get()
  findAll(@Res() res) {
    return res.status(HttpStatus.OK).json({
      message: `get all received...`
    }), this.productsService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') _id: string, @Res() res) {
    return res.status(HttpStatus.OK).json({
      message: `get one received the ${_id}...`
    }), this.productsService.findOne(_id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto, @Res() res) {
    return res.status(HttpStatus.OK).json({
      message: `create...`
    }), 
    
    this.productsService.create(createProductDto);
  }
  
  @Put(':id')
  update(@Param('id') _id: string, @Body() updateProductDto: UpdateProductDto, @Res() res) {
    return res.status(HttpStatus.OK).json({
      message: `updated...`
    }), this.productsService.update(_id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') _id: string, @Res() res) {
    return res.status(HttpStatus.OK).json({
      message: `deleted...`
    }), this.productsService.remove(_id);
  }
}
