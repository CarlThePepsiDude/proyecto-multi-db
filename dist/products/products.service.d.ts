import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    findAll(): Promise<Product[]>;
    create(dto: CreateProductDto): Promise<Product>;
}
