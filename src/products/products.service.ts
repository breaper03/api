import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './shared/dto/create-product.dto';
import { Products } from './shared/interface/products.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') readonly productModel: Model<Products>) {}

  async findAll(): Promise<Products[]> {
    const products = await this.productModel.find()
    return products
  }
  
  async findOne(_id: string): Promise<Products> {
    const product = this.productModel.findById(_id);
    return product;
  }
  
  async create(createProductDto: CreateProductDto): Promise<Products> {
    const product = new this.productModel(createProductDto);
    return await product.save()
  }

  async update(_id: string, updateProductDto: UpdateProductDto): Promise<Products> {
    const uptProduct = await this.productModel.findByIdAndUpdate(_id, updateProductDto, {new: true})
    return uptProduct
  }

  async delete(_id: string): Promise<Products> {
    return await this.productModel.findByIdAndDelete(_id)
  }
}
