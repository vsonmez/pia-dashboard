import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../../models/productModel/product-model";
import { RootState } from "../../store";


interface ProductState {
    products: ProductModel | null;
}

const initialState: ProductState = {
    products: null
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getAllProducts: (state, action: PayloadAction<ProductModel>) => {
            state.products = action.payload;
        }
    }
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
export const selectProductList = (state: RootState) => state.product.products; 