export interface ProductModel {
    products: [
        {
            id: string,
            title: string,
            description: string,
            price: number,
            discountPercentage: number,
            rating: number,
            stock: number,
            brand: string,
            category: string,
            thumbnail: string
            images: string[],
        }
    ]
    total: number,
    skip: number,
    limit: number
}

