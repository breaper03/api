import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './shared/dto/create-product.dto';
import { Products } from './shared/interface/products.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') productModel: Model<Products>) {}

  create(createProductDto: CreateProductDto) {
    return createProductDto;
  }

  findAll() {
    return `This action returns all productss`;
  }

  findOne(_id: string) {
    return `This action returns a #${_id} product`;
  }

  update(_id: string, updateProductDto: UpdateProductDto) {
    return `This action updates a #${_id} product`;
  }

  remove(_id: string) {
    return `This action removes a #${_id} product`;
  }
}
