export class CreateProductDto {
  readonly name: string;
  readonly description: string;
  readonly img: string;
  readonly price: number;
  readonly createAt: Date;
}

export class UpdateProductDto {
  readonly name?: string;
  readonly description?: string;
  readonly img?: string;
  readonly price?: number;
  readonly createAt?: Date;
}
