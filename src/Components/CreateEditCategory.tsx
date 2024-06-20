import React, { useEffect } from 'react'
import { CreateEditProductInterface, UpdateCategoryDetailInterface } from '../Interface';

const CreateEditCategory = ({editCategoryDetail,setEditCategoryDetail,CreateUpdateCategory}:{editCategoryDetail:UpdateCategoryDetailInterface,setEditCategoryDetail:any,CreateUpdateCategory:any}) => {
    

    useEffect(()=>{

        console.log(editCategoryDetail);
        

    },[])

    const setName = (value:any) => {
        setEditCategoryDetail((prev:any)=>{
            return{
                ...prev,
                name: value
            }
        })
    }
      
    const setImage = (value:any) => {
        setEditCategoryDetail((prev:any)=>{
            return{
                ...prev,
                image: value
            }
        })
    }
      
  return (
    <>
        <div className="add-category-form-card">
            <input type="text" name="name" id="name" className='category-name' placeholder="Enter category name" value={editCategoryDetail.name} onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" name="category-image" placeholder="Enter category image URL" id="category-image" className='category-image' value={editCategoryDetail.image} onChange={(e)=>{setImage(e.target.value)}}/>
            <button type="button" className='category-create' onClick={ ()=>{ CreateUpdateCategory(editCategoryDetail.id ? 'UPDATE' : 'CREATE') } }> Update </button>
        </div>
    </>
  )
}

export default CreateEditCategory