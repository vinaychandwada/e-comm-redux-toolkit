import React, { useEffect,useState } from 'react'
import CategoryList from '../Components/CategoryList'
import { getAllProductList, getCategories, getProductDetail, getProductList } from '../Service/Index'
import ProductList from '../Components/ProductList'
import ProductDetail from '../Components/ProductDetail'
import { ProductInterface } from '../Interface'
import { useDispatch, useSelector } from 'react-redux'
import categories, { getAllCategories, openAllProduct, openCategories, openProducts } from '../redux/slice/categories'
import { store } from '../redux/store'

const Home = () => {

    const [page, setPage] = useState('CATEGORY')

    const dispatch = useDispatch();
    const categoryListState:any = useSelector((state)=> state) || [];
    const productListState:any = useSelector((state)=> state) || [];
    const productDetails:any = useSelector((state)=> state) || [];    
    
    useEffect(()=>{
        if(!(categoryListState.categories.dataCategoryList.length > 0)){
            dispatch(getAllCategories())
        }
    },[])

    const oprnCategory = async (id:number) => {
        if(!(categoryListState.categories.dataProductList.length > 0) || (id != categoryListState.categories.categoryId)){
            dispatch(openCategories(id))
        }
        setPage("PRODUCT");
    }

    const openProduct = async (id:number) => {
        if((categoryListState.categories.productDetails.length == 0) || (id != categoryListState.categories.productId)){
            dispatch(openProducts(id))
        }
        setPage("PRODUCT-DETAIL");
    }
    
    const openAllProducts = async () => {
        dispatch(openAllProduct());
        setPage("PRODUCT");
    }

    const deleteProduct = (id:number) => {

    }

    const editCategory = (id:number) => {

    }

    const editProduct = () => {

    }


  return (
    <>
        { 
            page === "CATEGORY" 
                ?
                    <>
                        {
                            categoryListState.categories.isLoading 
                            ? 
                                <div className="spinner-container">
                                    <div className="loading-spinner">
                                    </div>
                                </div>  
                            :
                                <CategoryList openAllProducts={openAllProducts} categoryList={categoryListState.categories.dataCategoryList} isAdmin={false} oprnCategory={oprnCategory} deleteCategory={deleteProduct} editCategory={editCategory}/>
                        }
                        
                    </>
                :
            page === "PRODUCT"
                ?
                    <>
                        {
                            productListState.categories.isLoading 
                            // false
                            ?
                                <div className="spinner-container">
                                    <div className="loading-spinner">
                                    </div>
                                </div>  
                            :
                                <>
                                    <div className='back-button' onClick={ ()=>{ setPage('CATEGORY') } }>Back</div>
                                    <ProductList productList={productListState.categories.dataProductList} isAdmin={false} openProduct={openProduct} deleteProduct={deleteProduct} editProduct={editProduct}/>    
                                </>

                        }
                    </>
                :
                    <>
                        {
                            productDetails.categories.isLoading
                            ?
                            <div className="spinner-container">
                                <div className="loading-spinner">
                                </div>
                            </div>
                            :
                                <>
                                    <div className='back-button' onClick={ ()=>{ setPage('PRODUCT') } }>Back</div>
                                    <ProductDetail productDetail={productDetails.categories.productDetails}/>    
                                </>
                        }
                    </>    
        }
    </>
  )
}

export default Home