import React, { useEffect, useState } from 'react'
import { addNewProduct, getProductDetail, updateProductDetail } from '../Service/Index';
import { CreateEditProductInterface, DataMapInterface } from '../Interface';

const CreateEditProduct = ({oprnCategoryId,successProductCeateEdit,editProductId}:{editProductId:number,oprnCategoryId:number,successProductCeateEdit:any}) => {

    const [productImages,setProductImages] = useState(['']);
    const [dataMap, setDataMap] = useState<DataMapInterface>({
        'title':'',
        'price':'',
        'images':[],
        'description':'',
        'categoryId':oprnCategoryId,
    })
  
    useEffect(()=>{
      if(editProductId){
        getProductDetails(editProductId);
      }
    },[])
  
    const getProductDetails = async (id:number) => {
      let res = await getProductDetail(id);
      if(res['request']['status'] == 200){
        setDataMap({
          'title':res['data']['title'],
          'price':res['data']['price'],
          'images':[],
          'description':res['data']['description'],
          'categoryId':res['data']['id'],
        });
  
        setProductImages(res['data']['images']);
      }
    }

    const addImage = () => {
        setProductImages((prov)=>{
        return [
            ...prov,
            ''
        ];
        })
    }

    const setValue = (key:{id:string,value:string}) => {
      console.log(typeof(key));
      
        console.log(key);
        setDataMap((prev:CreateEditProductInterface)=>{
          console.log(prev) ;
          
        return{
            ...prev,
            [key.id]: key.value
        }
        })
    }

    const setImageValue = (key:{id:any,value:string})=>{
        let imageArray = [...productImages]
        imageArray[key.id] = key.value;
        
        setProductImages(imageArray);
    }

    const submitForm = async () => {
        dataMap['images'] = productImages;
        console.log(dataMap);
        if(editProductId){
          let res = await updateProductDetail(dataMap,editProductId);
          if(res['request']['status'] == 200){
            successProductCeateEdit('PRODUCT');
          }
        }else{
        let res = await addNewProduct(dataMap);
        if(res['request']['status'] == 200 || res['request']['status'] == 201){
            successProductCeateEdit('PRODUCT');
        }
        }
    }

  return (
    <>
        <div className='add-product-form'>
            <input type="text" className='input-product-title' id="title" placeholder='Enter Product Title' value={dataMap['title']}  onChange={(e)=> setValue(e.target) }/>
            <input type="text" className='input-product-price' id="price" placeholder='Enter Product Price' value={dataMap['price']} onChange={(e)=> setValue(e.target) }/>
            <textarea className='input-product-description' id="description" cols={30} placeholder='Enter Product Description' value={dataMap['description']} onChange={(e)=> setValue(e.target) }  rows={10}></textarea>
            {/* <input type="text" className='input-product-description' id="description" placeholder='Enter Product Description' value={dataMap['description']} /> */}
            {
            productImages.map((image, index) => {
                // setProductImages();
                return (
                <>
                    <input type="text" /*name={'input-image-'+index}*/ className='input-image' value={productImages[index]} id={""+ index} placeholder='Enter Producr Image URL here' onChange={(e)=> setImageValue(e.target) }/>
                </>
                )
            })
            }
            <button type="button" className='add-more-image-button' onClick={()=>{ addImage() }}>+</button>
            <button type="button"  className='add-produce-button' onClick={()=>{ submitForm() }}>Add Product</button>
      
        </div>
    </>
  )
}

export default CreateEditProduct