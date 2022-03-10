import {authActions, authActionTypes, authState} from "./types";
import {IUser} from "../../../models/IUser";

const  initialState: authState = {
    isAuth: false,
    isLoading: false,
    errorValue: null,
    user: {} as IUser
}

export const authReducer = (state = initialState, action: authActions): authState => {
    switch (action.type){

        case authActionTypes.AUTH_IS_LOADING:
            return {...state, isLoading: action.payload}

        case authActionTypes.AUTH_ERROR:
            return {...state, errorValue: action.payload}

        case authActionTypes.AUTH_IS_AUTH:
            return {...state, isAuth: action.payload}

        case authActionTypes.AUTH_SET_USER:
            return {...state, user: action.payload}

        default:
            return  state
    }
}