import React, {FC} from 'react'
import './Product.scss'
import {IProduct} from "../../../../models/IProduct";
import {useTypeSelector} from "../../../../hooks/useTypeSelector";
import {useAction} from "../../../../hooks/useAction";
import {useNavigate} from "react-router-dom";


interface ProductProps {
   product: IProduct
}

const Product: FC<ProductProps> = ({product}) => {

   const {user, isLoading} = useTypeSelector(i => i.user)
   const {onTogleProductCart, onTogleProductFavorites} = useAction()

   const navigate = useNavigate()

   const [addStyles, setAddStyles] = React.useState<string>("iteam__add _icon-plus")
   const [favoritesStyles, setFavoritesStyles] = React.useState<string>("iteam__like _icon-like")

   React.useEffect(() => {

         if(user?.id)
            if(user.productInCart.find((id: string) => id === product.id)) {
               setAddStyles("iteam__add _icon-check iteam__add-pressed")
            } else {
                setAddStyles("iteam__add _icon-plus")
            }

   },[user?.productInCart])
   React.useEffect(() => {

      if(user?.id)
         if(user.productInFavorites.find((id: string) => id === product.id)) {
            setFavoritesStyles("iteam__like _icon-like iteam__like-pressed")
         } else {
            setFavoritesStyles("iteam__like _icon-like")
         }

   },[user?.productInFavorites])

   function onTogleCartProduct () {
      if(user?.id) {
         onTogleProductCart(product.id, user)
      } else {
         navigate('/profile')
      }
   }
   function onTogleFavoritesProduct () {
      if(user?.id) {
         onTogleProductFavorites(product.id, user)
      } else {
         navigate('/profile')
      }
   }

   return (
      <div className="iteam__conteiner">
         <button className={favoritesStyles}
                 disabled={isLoading}
                 onClick={onTogleFavoritesProduct}></button>
            <img src={process.env.PUBLIC_URL+product.img_path}
                 alt="Product"
                 className='iteam__img _ibg' />
            <h5 className="iteam__label">{product.name}</h5>
            <div className="iteam__pricebox">
               <p className="iteam__pricelabel">Цена:</p>
               <p className="iteam__price">{product.price}</p>
            </div>
                   <button className={addStyles}
                           disabled={isLoading}
                           onClick={onTogleCartProduct}></button>
      </div>
   )
}

export default Product