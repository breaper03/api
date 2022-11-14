import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './shared/dto/create-product.dto';


@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all products`;
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
