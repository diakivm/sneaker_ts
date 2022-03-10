import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Cart from "../../shared/components/Cart/Cart";
import {routeNames} from "../../router/routes";

export default function Header() {

   let[isCartShow, setIsCartShow] = React.useState(false)


   function onTogleCartShow(){
      setIsCartShow(!isCartShow)
   }


   return (
      <header className='header'>
         <div className="header_container _container ">
            <div className="header__body">

               <Link to={routeNames.MAIN}>
                  <div className="header__label lable-header">
                     <img src={process.env.PUBLIC_URL+"/img/logo.png"} alt="Logo" className="lable-header__logo _ibg" />
                     <div className="lable-header__text">
                        <h1 className="lable-header__name">SNEAKERS</h1>
                        <p className="lable-header__subname">Магазин лучших кроссовок</p>
                     </div>
                  </div>
               </Link>

               <ul className="header__nav nav-header">
                  <li className="nav-header__item">
                        <div className="nav-header__cart nav-header__item _icon-cart"
                             onClick={onTogleCartShow}>
                           <span className='nav-header__cart-finalsum'></span>
                        </div> 
                  </li>
                  <li className="nav-header__item">
                        <Link to={routeNames.FAVORITES}>
                           <div className="nav-header__like nav-header__item _icon-like"></div>
                        </Link>
                  </li>

                  <li className="nav-header__item">
                     <Link to={routeNames.LOGIN}>
                        <div className="nav-header__profile nav-header__item _icon-profile"></div>
                     </Link>
                  </li>
               </ul>
                <Cart isCartShow={isCartShow}
                      closeCartAction={onTogleCartShow}/>
            </div>
         </div>
      </header>
   )
}
