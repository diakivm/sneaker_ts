import {cartAction, cartActions, cartState} from "./types";

const initialState: cartState = {
    products: [],
    isLoadingData: false,
    errorValue: null
}

export const cartReducer = (state = initialState, actions: cartAction): cartState => {
    switch (actions.type) {
        case cartActions.RESET_PRODUCTS:
            return {...state, products: [], isLoadingData: false, errorValue: null}
            break;
        case cartActions.SET_PRODUCTS:
            return {...state, products: actions.payload}
            break;
        case cartActions.SET_IS_LOADING_PRODUCTS:
            return {...state, isLoadingData: actions.payload}
            break;
        case cartActions.SET_ERROR_PRODUCTS:
            return {...state, errorValue: actions.payload}
            break;
        case cartActions.SET_PRODUCT:
            return {...state, products: [...state.products, actions.payload]}
            break;
        default:
             return state

    }
}