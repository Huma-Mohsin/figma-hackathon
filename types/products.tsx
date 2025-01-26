

export interface Product {
    _id: number;
    productName: string;
    _type: string;
    category: string;
    price: number;
    inventory: number;
    colors: string[];
    status: string;
    image: {
        asset: {
            _ref: string;
            _type: "image";
        };
    };
    description: string;
   slug: {
    _type: "slug";
    current: string;
    };
}