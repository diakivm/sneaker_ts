import {IProduct} from "../../../models/IProduct";
import {
    ISetErrorProductsInCartAction,
    ISetIsLoadingProductsInCartAction,
    ISetProductsInCartAction,
    cartAction,
    cartActions, IResetProductsInCartAction, ISetProductInCartAction
} from "./types";
import {Dispatch} from "react";
import appService from "../../../API/appService";
import Dalay from "../../../utils/Dalay";


const setProductsInCartAction = (products: IProduct[]): ISetProductsInCartAction => {
    return {
        type: cartActions.SET_PRODUCTS,
        payload: products
    }
}

const setProductInCartAction = (products: IProduct): ISetProductInCartAction => {
    return {
        type: cartActions.SET_PRODUCT,
        payload: products
    }
}

const setIsLoadingAction = (isLoading: boolean): ISetIsLoadingProductsInCartAction => {
    return {
        type: cartActions.SET_IS_LOADING_PRODUCTS,
        payload: isLoading
    }
}
const setErrorAction = (error: string): ISetErrorProductsInCartAction => {
    return {
        type: cartActions.SET_ERROR_PRODUCTS,
        payload: error
    }
}

const resetAction = (): IResetProductsInCartAction => {
    return {
        type: cartActions.RESET_PRODUCTS,
    }
}


export function fetchProductsInCart(ids: string[]) {
    return async (dispatch: Dispatch<cartAction>) => {
        try {
            dispatch(setIsLoadingAction(true))

            let arrOfProducts: IProduct[] = []
            for(const id of ids) {
                const response = await appService.getProductById(id)
                arrOfProducts.push(response.data)
            }
            dispatch(setProductsInCartAction(arrOfProducts))

        } catch (e){
            dispatch(setErrorAction((e as Error).toString()))
        }finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}

export function resetProductsInCart() {
   return resetAction()
}