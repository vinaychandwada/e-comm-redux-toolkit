import axios from "axios"
import {UpdateCategoryDetailInterface,CreateCategoryInterface, CreateEditProductInterface} from "../Interface";


export const getCategories = () => {
    return axios.get('https://api.escuelajs.co/api/v1/categories');
}

export const getProductList = (id:number) => {
    return axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
}

export const getProductDetail = (id:number) => {
    return axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
}

export const deleteCategoryService = (id:number) => {
    return axios.delete(`https://api.escuelajs.co/api/v1/categories/${id}`); 
}

export const deleteProductService = (id:number) => {
    return axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`); 
}

export const updateCategoryDetail = (data:UpdateCategoryDetailInterface,id:number) => {
    return axios.put(`https://api.escuelajs.co/api/v1/categories/${id}`,data); 
}

export const createCategory = (data:CreateCategoryInterface) => {
    return axios.post(`https://api.escuelajs.co/api/v1/categories/`,data);
}

export const addNewProduct = (data:CreateEditProductInterface) => {
    return axios.post(`https://api.escuelajs.co/api/v1/products/`,data); 
}

export const updateProductDetail = (data:CreateEditProductInterface,id:number) => {
    return axios.put(`https://api.escuelajs.co/api/v1/products/${id}`,data); 
}

export const getAllProductList = () => {
    return axios.get(`https://api.escuelajs.co/api/v1/products`);
}