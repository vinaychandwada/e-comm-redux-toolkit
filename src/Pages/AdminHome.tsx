import React, { useEffect, useState } from 'react'
import CategoryList from '../Components/CategoryList'
import { createCategory, deleteCategoryService, deleteProductService, getAllProductList, getCategories, getProductDetail, getProductList, updateCategoryDetail } from '../Service/Index'
import ProductList from '../Components/ProductList'
import ProductDetail from '../Components/ProductDetail'
import { confirmAlert } from "react-confirm-alert";
import ConfirmAlert from '../../src/Widget/ConfirmAlert'
import CreateEditCategory from '../Components/CreateEditCategory'
import CreateEditProduct from '../Components/CreateEditProduct'
import { ProductInterface, UpdateCategoryDetailInterface } from '../Interface'

const AdminHome = () => {
  
    const [page, setPage] = useState('CATEGORY') 
    const [categoryList, setCategoryList] = useState([]);
    const [productList,setProductList] = useState([]);
    const [productDetail,setProductDetail] = useState<ProductInterface>();
    const [oprnCategoryId,setOpenCategoryId] = useState(0);
    const [editCategoryDetail,setEditCategoryDetail] = useState<UpdateCategoryDetailInterface>({
        creationAt: "",
        id: 0,
        image: "",
        name: "",
        updatedAt: ""
    });
    const [editProductId,setEditProductId] = useState(0);

    useEffect(()=>{
        getCategoryList();
    },[])

    const getCategoryList = async () => {
        const res = await getCategories();
        if(res['request']['status'] === 200){
            setCategoryList(res['data']);
        }
    }

    const oprnCategory = async (id:number) => {
        setOpenCategoryId(id);
        let res = await getProductList(id);
        if(res['request']['status'] === 200){    
            setPage("PRODUCT");
            setProductList(res['data']);
        }
    }

    const openProduct = async (id:number) => {
        let res = await getProductDetail(id);
        if(res['request']['status'] === 200){
            setPage("PRODUCT-DETAIL");
            setProductDetail(res['data']);
        }
    }

    const deleteCategory = (id:number) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <ConfirmAlert id={id} title={"Are you shure you want to delete this category?"} conformRes={conformRes}/>          
                );
            },
        });
    }

    const deleteProduct = (id:number) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <ConfirmAlert id={id} title={"Are you shure you want to delete this product?"} conformRes={conformRes}/>          
                );
            },
        });
    }

    const conformRes = async (id:number,ConRes:string) =>{
        
        let res;
        if(ConRes == 'YES'){
            if(page == 'PRODUCT'){
                res = await deleteProductService(id);
                if(res['data'] == true){
                    oprnCategory(oprnCategoryId);
                    setPage("PRODUCT");
                }
            }
            else{
                res = await deleteCategoryService(id);
                if(res['data'] == true){
                    getCategoryList();
                    setPage("CATEGORY");
                }
            }
        }
    }

    const editCategory = (data:UpdateCategoryDetailInterface) => {
        setEditCategoryDetail(data);
        setPage('EDIT-CATEORY')
    }

    const CreateUpdateCategory = async (res:string) => {
        console.log(editCategoryDetail['name']);
        if(res == 'UPDATE'){
            if(editCategoryDetail['name'] != ""){
                let res = await updateCategoryDetail(editCategoryDetail,editCategoryDetail['id']);
                if(res['request']['status'] === 200){
                    setEditCategoryDetail({
                        creationAt: "",
                        id: 0,
                        image: "",
                        name: "",
                        updatedAt: ""});
                    setPage('CATEGORY');
                    getCategoryList();
                }
            }
        }
        else{
            console.log(editCategoryDetail);
            let res = await createCategory(editCategoryDetail);
            if(res['request']['status'] === 200 || res['request']['status'] === 201){
                setPage("CATEGORY");   
                getCategoryList();
            }
        }
    }

    const successProductCeateEdit = () => {
        oprnCategory(oprnCategoryId);
    }

    const editProduct = (id:number) => {
        setEditProductId(id);
        setPage("EDIT-PRODUCT");
    }

    const openAllProducts = async () => {
        let res  = await getAllProductList();
        if(res['request']['status'] == 200){
            setProductList(res.data);
            setPage("PRODUCT");
        }
    }

  return (
    <>
        {
            page === 'CATEGORY'
                ?   <>
                        <button className='create-a-category' onClick={()=>{setPage('CREATE-CATEGORY')}}> Create a category </button>
                        <CategoryList categoryList={categoryList} openAllProducts={openAllProducts} isAdmin={true} oprnCategory={oprnCategory} deleteCategory={deleteCategory} editCategory={editCategory}/>
                    </>
                :

            page === "PRODUCT"
                ?
                    <>
                        <div className='back-button' onClick={ ()=>{ setPage('CATEGORY') } }>Back</div>
                        <button className='create-a-category' onClick={()=>{setPage('CREATE-PRODUCT')}}> Add a product </button>
                        <ProductList productList={productList} isAdmin={true} openProduct={openProduct} deleteProduct={deleteProduct} editProduct={editProduct}/>    
                    </>  
                :
            page === "PRODUCT-DETAIL"
                ?    
                    <>
                        <div className='back-button' onClick={ ()=>{ setPage('PRODUCT') } }>Back</div>
                        <ProductDetail productDetail={productDetail}/>    
                    </>
                :
            page === "EDIT-CATEORY" || page === "CREATE-CATEGORY"
                ?    
                    <>
                        <div className='back-button' onClick={ ()=>{ setPage('CATEGORY') } }>Back</div>
                        <CreateEditCategory editCategoryDetail={editCategoryDetail} setEditCategoryDetail={setEditCategoryDetail} CreateUpdateCategory={CreateUpdateCategory}/>
                    </>
                :
            page === "CREATE-PRODUCT" || page === "EDIT-PRODUCT"
                ?
                    <>
                        <div className='back-button' onClick={ ()=>{ setPage('PRODUCT') } }>Back</div>
                        <CreateEditProduct editProductId={editProductId} oprnCategoryId={oprnCategoryId} successProductCeateEdit={successProductCeateEdit}/>
                    </>
                :
                    <></>                        
        }
    </>
  )
}

export default AdminHome

