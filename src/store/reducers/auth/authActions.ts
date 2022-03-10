import {
    authActions,
    authActionTypes,
    authErrorAction,
    authIsAuth,
    authIsLoadingAction,
    authSetUserAction
} from "./types";
import {IUser} from "../../../models/IUser";
import {Dispatch} from "react";
import appService from "../../../API/appService";
import Dalay from "../../../utils/Dalay";


const setIsLoading = (isLoading: boolean): authIsLoadingAction  => {
    return {
        type: authActionTypes.AUTH_IS_LOADING,
        payload: isLoading
    }
}

const setIsAuth = (isAuth: boolean): authIsAuth  => {
    return {
        type: authActionTypes.AUTH_IS_AUTH,
        payload: isAuth
    }
}

const setUser = (user: IUser): authSetUserAction => {
    return {
        type: authActionTypes.AUTH_SET_USER,
        payload: user
    }
}

const setError = (error: string | null): authErrorAction => {
    return {
        type: authActionTypes.AUTH_ERROR,
        payload: error
    }
}

export function  login(username: string, password: string) {
    return async (dispatch: Dispatch<authActions>) => {
        try {
            dispatch(setIsLoading(true))

            const response = await appService.getUsers()
            const findedUser = response.data.find((user: IUser) => user.username === username && user.password === password)

            if(findedUser){
                dispatch(setError(null))
                dispatch(setIsAuth(true))
                dispatch(setUser(findedUser))
                localStorage.setItem('username', findedUser.username)
                localStorage.setItem('password', findedUser.password)

            } else {
                dispatch(setIsAuth(false))
                dispatch(setError("User not found!!!"))
                await setTimeout(() => {
                    dispatch(setError(null))
                },3000)
                dispatch(setUser({} as IUser))
            }

        } catch (e) {
            dispatch(setIsAuth(false))
            dispatch(setUser({} as IUser))
            dispatch(setError((e as Error).toString()))
        } finally {
            dispatch(setIsLoading(false))
        }
    }
}

export function logout(){
    return async (dispatch: Dispatch<authActions>) => {
        try {
            dispatch(setUser({} as IUser))
            dispatch(setError(null))
            dispatch(setIsAuth(false))
            localStorage.removeItem('username')
            localStorage.removeItem('password')
        } catch (e){
            dispatch(setError((e as Error).toString()))
            await setTimeout(() => {
                dispatch(setError(null))
            },3000)
        }
    }
}


export function removeProductFromCart(idOfProduct: string, user: IUser){
    return async (dispatch: Dispatch<authActions>) => {
        try {
            const changedUser: IUser = {...user, productInCart: user.productInCart.filter((item: string) => item !== idOfProduct)}
            await appService.putUser(changedUser)
            dispatch(setUser(changedUser))
        } catch (e){
            dispatch(setError((e as Error).toString()))
        }
    }
}

export function onTogleProductCart(idOfProduct: string, user: IUser){
    return async (dispatch: Dispatch<authActions>) => {
        try {
            dispatch(setIsLoading(true))
            let changedUser: IUser = user

            if(user.productInCart.find((id: string) => idOfProduct === id )) {
                changedUser = {
                    ...user,
                    productInCart: user.productInCart.filter((item: string) => item !== idOfProduct)
                }
            } else {
                changedUser = {
                    ...user,
                    productInCart: [idOfProduct, ...user.productInCart]
                }
            }

            await appService.putUser(changedUser)
            dispatch(setUser(changedUser))
        } catch (e){
            dispatch(setError((e as Error).toString()))
        } finally {
            dispatch(setIsLoading(false))
        }
    }
}

export function onTogleProductFavorites(idOfFavorites: string, user: IUser){
    return async (dispatch: Dispatch<authActions>) => {
        try {
            dispatch(setIsLoading(true))
            let changedUser: IUser = user

            if(user.productInFavorites.find((id: string) => idOfFavorites === id )) {
                changedUser = {
                    ...user,
                    productInFavorites: user.productInFavorites.filter((item: string) => item !== idOfFavorites)
                }
            } else {
                changedUser = {
                    ...user,
                    productInFavorites: [idOfFavorites, ...user.productInFavorites]
                }
            }

            await appService.putUser(changedUser)
            dispatch(setUser(changedUser))
        } catch (e){
            dispatch(setError((e as Error).toString()))
        } finally {
            dispatch(setIsLoading(false))
        }
    }
}