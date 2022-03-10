import React, {FC} from 'react';
import ProductsContainer from "../../shared/components/ProductsContainer/ProductsContainer";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";
import {useNavigate} from "react-router-dom";
import {routeNames} from "../../router/routes";

const Favorites: FC = () => {

    const {products, isLoadingData, errorValue} = useTypeSelector(i => i.products)
    const {user} = useTypeSelector(i => i.user)
    const {fetchFavoritesProducts} = useAction()

    const navigate = useNavigate()

    React.useEffect(() => {

        if(user?.id)
            fetchFavoritesProducts(user?.productInFavorites)
        else
            navigate(routeNames.LOGIN)

    },[user?.productInFavorites])

    return (
        <div>
            <ProductsContainer products={products}
                               isLoading={isLoadingData}
                               error={errorValue}
                               countOfFakeProducts={5}
                               title={"Кроссовки"}/>
        </div>
    );
};

export default Favorites;