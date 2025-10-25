import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAll(): Promise<{
        count: number;
        data: import("./schemas/product.schema").Product[];
    }>;
    create(dto: CreateProductDto): Promise<{
        created: boolean;
        product: import("./schemas/product.schema").Product;
    }>;
}
