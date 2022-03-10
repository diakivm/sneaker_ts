import React, {FC} from 'react'
import './Cart.scss'
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useAction} from "../../../hooks/useAction";
import Spiner, {SpinerSizes} from "../GoodLoader/Spiner";
import NotEmptyCart from "./NotEmptyCart";
import EmptyCart from "./EmptyCart";

interface CartProps {
    closeCartAction: () => void
    isCartShow: boolean
}

const Cart: FC<CartProps> = ({closeCartAction, isCartShow}) => {

    const {products, isLoadingData, errorValue} = useTypeSelector(i => i.cart)
    const {user} = useTypeSelector(i => i.user)

    const {fetchProductsInCart, resetProductsInCart} = useAction()

    React.useEffect(() => {
        if(user?.productInCart && isCartShow === true){
            fetchProductsInCart(user.productInCart)
        }
    },[isCartShow, user?.productInCart])


    const cartStyles = ["sidemenu__overlay"]
    if(isCartShow)
        cartStyles.push("sidemenu__overlay-visible")

   return (
      <div className={cartStyles.join(" ")} onClick={closeCartAction}>
         <div className="sidemenu__container" onClick={(e) => e.stopPropagation()}>
            <div className="sidemenu__headcontainer">
               <h4 className="sidemenu__name" >Корзина</h4>
               <div className="goodside__remove _icon-plus"
                    onClick={closeCartAction}></div>
            </div>
            {
                isLoadingData ?
                              <Spiner size={SpinerSizes.large}/>
                              :
                              products.length > 0 ?
                                                  <NotEmptyCart products={products}/>
                                                  :
                                                  <EmptyCart closeCartAction={closeCartAction}/>
            }
         </div> 
     </div>
   )
}

export default Cart
