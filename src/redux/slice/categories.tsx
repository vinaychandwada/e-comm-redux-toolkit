import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProductList, getCategories, getProductDetail, getProductList } from "../../Service/Index";

export const getAllCategories:any = createAsyncThunk('getAllCategories',async()=>{
    const responce = await getCategories();
    return responce.data;
})

export const openCategories:any = createAsyncThunk('openCategories',async(id:number)=>{
    let response = await getProductList(id);
    return {
        response:response.data,
        id:id
    };
});

export const openProducts:any = createAsyncThunk('openProducts',async(id:number)=>{
    let response = await getProductDetail(id);
    return {
        response:response.data,
        id:id
    };
})

export const openAllProduct:any = createAsyncThunk('openAllProducts',async()=>{
    let response = await getAllProductList();
    return response;
})

const getAllCategoriesSlice = createSlice({
    name:'getAllCategoriesSlice',
    initialState:{
        name:'',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        isLoading:false,
        isError:false,
        categoryId:null,
        productId:null,
        dataCategoryList:[],
        dataProductList:[],
        productDetails:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllCategories.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(getAllCategories.rejected,(state,action)=>{
            state.isError = true;
        })
        builder.addCase(getAllCategories.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.dataCategoryList = action.payload;
        })
        builder.addCase(openCategories.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(openCategories.rejected,(state,action)=>{
            state.isError = true;
        })
        builder.addCase(openCategories.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.dataProductList = action.payload.response;
            state.categoryId=action.payload.id;
        })
        builder.addCase(openProducts.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(openProducts.fulfilled,(state,action)=>{
            state.isLoading = false;            
            state.productDetails = action.payload.response;
            state.productId = action.payload.id;
        })
        builder.addCase(openAllProduct.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(openAllProduct.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.dataProductList = action.payload.response;
            state.productId = null;
        })
    }
})

export default getAllCategoriesSlice.reducer
// export const categorySelector = (state:any)=>state.categories;