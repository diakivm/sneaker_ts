import React from 'react'
import './Main.scss'
import Slider from "../../shared/components/Sliders/Slider";
import {homePageSliderSlides} from "../../models/ISlide";
import ProductsContainer from "../../shared/components/ProductsContainer/ProductsContainer";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";


export default function Main() {

    const {products, isLoadingData, errorValue} = useTypeSelector(i => i.products)
    const {fetchProducts} = useAction()

    React.useEffect(() => {
        fetchProducts()
    },[])

   return (
      <main className="page">
          <div className="page__slider slider">
              <Slider slides={homePageSliderSlides}/>
          </div>
          <ProductsContainer products={products}
                             isLoading={isLoadingData}
                             error={errorValue}
                             countOfFakeProducts={10}
                             title={"Кроссовки"}/>
      </main>
   )
}
