import React, {FC} from 'react';
import {IProduct} from "../../../models/IProduct";
import CartProduct from "../Products/CartProduct/CartProduct";

interface CartProductContainerProps {
    products: IProduct[]
    isLoading?: boolean
    error?: string | null
    countOfFakeProducts?: number
}

const CartProductsContainer: FC<CartProductContainerProps> = ({products, isLoading = false, error}) => {
    return (
        <>
            {
                  isLoading ?
                            <></>
                            :
                            products.map((product: IProduct) =>{
                                return <CartProduct product={product}
                                                    key={product.id}/>
                            })
            }
        </>
    );
};

export default CartProductsContainer;