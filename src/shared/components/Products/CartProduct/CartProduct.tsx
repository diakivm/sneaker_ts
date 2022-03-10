import React, {FC} from 'react'
import './CartProduct.scss'
import {IProduct} from "../../../../models/IProduct";
import {useAction} from "../../../../hooks/useAction";
import {useTypeSelector} from "../../../../hooks/useTypeSelector";

interface CartProductProps {
    product: IProduct
}

const CartProduct: FC<CartProductProps> = ({product}) => {

    const {user} = useTypeSelector(i => i.user)
    const {removeProductFromCart} = useAction()

    function onClickRemoveProduct () {
        if(user) {
            removeProductFromCart(product.id, user)
        }

    }

   return (
      <div className='goodside__container'>
            <img src={process.env.PUBLIC_URL+product.img_path}
                 alt="Product image"
                 className="goodside__img _ibg" />
         <div className="goodside__info">
               <h5 className="goodside__label">{product.name}</h5>
               <p className="goodside__price">{product.price}</p>
         </div>
         <div className="goodside__remove _icon-plus"
              onClick={onClickRemoveProduct}></div>
      </div>
   )
}

export default CartProduct
