export interface UpdateCategoryDetailInterface {
    creationAt: string;
    id: number;
    image: string;
    name: string;
    updatedAt: string;
}

export interface CreateCategoryInterface{
    image: string;
    name: string
}

export interface CreateEditProductInterface{
    categoryId: number;
    description: string;
    images: string[];
    price:string;
    title:string
}

export interface ProductInterface{
    category: UpdateCategoryDetailInterface;
    creationAt: string;
    description: string; 
    id: number;
    images: string[]; 
    price: number;
    title: string; 
    updatedAt: string; 
}

export interface DataMapInterface{
    'title':string;
    'price':string;
    'images':string[];
    'description':string;
    'categoryId':number;
}
