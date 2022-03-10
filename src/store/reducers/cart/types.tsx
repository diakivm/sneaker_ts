import {IProduct} from "../../../models/IProduct";

export interface cartState {
    products: IProduct[],
    isLoadingData: boolean,
    errorValue: string | null
}

export enum cartActions {
    SET_PRODUCTS = 'CART/SET_PRODUCTS',
    SET_PRODUCT = 'CART/SET_PRODUCT',
    SET_IS_LOADING_PRODUCTS = 'CART/SET_IS_LOADING_PRODUCTS',
    SET_ERROR_PRODUCTS = 'CART/SET_ERROR_PRODUCTS',
    RESET_PRODUCTS = 'CART/RESET_PRODUCTS',
}

export interface ISetProductsInCartAction {
    type: cartActions.SET_PRODUCTS
    payload: IProduct[]
}

export interface ISetProductInCartAction {
    type: cartActions.SET_PRODUCT
    payload: IProduct
}

export interface ISetIsLoadingProductsInCartAction {
    type: cartActions.SET_IS_LOADING_PRODUCTS
    payload: boolean
}

export interface ISetErrorProductsInCartAction {
    type: cartActions.SET_ERROR_PRODUCTS
    payload: string | null
}

export interface IResetProductsInCartAction {
    type: cartActions.RESET_PRODUCTS
}


export type cartAction = ISetProductsInCartAction | ISetIsLoadingProductsInCartAction | ISetErrorProductsInCartAction | IResetProductsInCartAction | ISetProductInCartAction