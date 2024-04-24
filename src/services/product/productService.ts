import http from "../../http";
import { ProductModel } from "../../models/productModel/product-model";


export namespace ProductService {
    export const getAll = () => {
        return http.get<ProductModel>(`products`);
    }
}