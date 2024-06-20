import { useEffect } from "react";
import { UpdateCategoryDetailInterface } from "../Interface";

const CategoryList = ({categoryList,isAdmin,oprnCategory,deleteCategory,editCategory,openAllProducts}:{openAllProducts:()=>{},categoryList:UpdateCategoryDetailInterface[],isAdmin:boolean,oprnCategory:(id:number)=>{},deleteCategory:(id:number)=>void,editCategory:any}) => {
  return (
    <>
        <div>
            <div className='show-all-products' onClick={()=>{ openAllProducts(); }}>Show All Products</div>
            <h2 className='heading-2'>Product Categories</h2>
            {
                categoryList && categoryList.map((data:UpdateCategoryDetailInterface)=>{
                    return (
                        <>
                            {/* <img src={tag}  className='home-tag'/> */}
                            <div className='category-card' onClick={ () => { oprnCategory(data.id) } }>  
                            <img src={data.image}/>
                            <div className='category-details'>
                                {data.name}
                            </div>
                            </div>
                            {
                                isAdmin 
                                ? 
                                <>
                                <div className='edit-category-btn' onClick={(event)=>{ editCategory(data) }}>
                                    edit
                                </div>
                                <div className='delete-category-btn' onClick={(event)=>{ deleteCategory(data.id) }}>
                                    delete
                                </div>
                                </>
                                :
                                <>

                                </>  
                            }
                        </>
                    )
                })
            }
        </div>
    </>
  )
}

export default CategoryList