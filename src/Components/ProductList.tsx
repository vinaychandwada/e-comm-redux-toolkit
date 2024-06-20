import React, { useEffect } from 'react'
import tag from '../../src/Assets/tag.png';
import { ProductInterface } from '../Interface';


const ProductList = ({openProduct,productList,isAdmin,deleteProduct,editProduct}:{productList:ProductInterface[],isAdmin:boolean,openProduct:(id:number)=>{},deleteProduct:(id:number)=>void,editProduct:(id:number)=>void}) => {

  return (
    <>
        <div className='product-cards'>
            {
                productList && productList.map((data:ProductInterface)=>{
                        return (
                            <>
                                <div className='product-card' >
                                    <img src={tag} className='tag'/>
                                    <img src={data.images.length != 0 ? data.images[0] : ''} className='product-image' onClick={()=>{  openProduct(data.id) }}/>
                                    <div className='product-title'> { data.title } </div>
                                    <div className='product-description'> { data.description } </div>
                                    <div className='product-card-bottom'>
                                    <div className='product-price'>{ "₹"+data.price } </div>
                                    {
                                        isAdmin ? 
                                        <>
                                        <button type="button" value="edit" onClick={()=>{editProduct(data.id)}}>Edit</button>
                                        <button type="button" value="delete" onClick={()=>{deleteProduct(data.id)}}>Delete</button>
                                        </>
                                        :
                                        <button type="button">Add To Cart</button>
                                    }
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
        </div>
    </>
  )
}

export default ProductList