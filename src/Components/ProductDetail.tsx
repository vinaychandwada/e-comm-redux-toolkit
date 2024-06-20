import React, { useEffect } from 'react'
import tag from '../Assets/tag.png';
import SimpleImageSlider from "react-simple-image-slider";
import { ProductInterface } from '../Interface';

const ProductDetail = ({productDetail}:{productDetail:ProductInterface | undefined}) => {

  useEffect(()=>{
    console.log(productDetail);
    
  },[productDetail])
  return (
    <>
        <div className='product-detail-card'>
            <SimpleImageSlider
                width={450}
                height={460}
                images={productDetail!.images}
                showNavs={true}
                showBullets={true}
            />     
            <img src={tag}  className='product-detail-tag'/>
            <div className='product-detail-right'>
                <div className='product-detail-title'>{productDetail && productDetail?.title}</div>
                <div className='product-detail-description'>{productDetail?.description}</div>
                <div className='product-detail-price'>₹{productDetail?.price}</div>
                <button type="button" className='product-detail-buy-now'>Buy Now</button>
                <button type="button" className='product-detail-add-cart'>Add To Cart</button>
            </div>
        </div>
    </>
  )
}

export default ProductDetail