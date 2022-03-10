import React, {FC} from 'react'
import './ProductsContainer.scss'
import Product from '../Products/Product/Product'
import {IProduct} from "../../../models/IProduct";
import FakeItems from "../../../utils/FakeItems";

interface ProductContainerProps {
    products: IProduct[]
    isLoading: boolean
    error: string | null
    title?: string
    countOfFakeProducts?: number
}

const ProductsContainer: FC<ProductContainerProps> = ({products, isLoading, error, title, countOfFakeProducts}) => {

   return (
           <div className="products">
             <div className="products__namesection namesection">
                <h3 className="namesection__name">{title}</h3>
             </div>
             <div className="products__container ">
                 <div className="products__wrapper">
                     {
                         isLoading ?
                                     FakeItems.getFakeProducts(countOfFakeProducts)
                                     :
                                     products.map((product) => {
                                         return <Product key={product.id}
                                                         product={product}/>
                                     })
                     }
                 </div>
             </div>
           </div>
   )
}

export default ProductsContainer