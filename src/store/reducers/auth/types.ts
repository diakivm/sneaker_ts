import { IUser } from "../../../models/IUser";

export interface authState {
    isAuth: boolean,
    isLoading: boolean,
    errorValue: string | null
    user: IUser | null
}

export enum authActionTypes{
    AUTH_IS_LOADING = "AUTH/AUTH_IS_LOADING",
    AUTH_IS_AUTH = "AUTH/AUTH_IS_AUTH",
    AUTH_ERROR = "AUTH/AUTH_ERROR",
    AUTH_SET_USER = "AUTH/AUTH_SET_USER",
}

export interface authIsLoadingAction {
    type: authActionTypes.AUTH_IS_LOADING,
    payload: boolean
}

export interface authErrorAction {
    type: authActionTypes.AUTH_ERROR,
    payload: string | null
}

export interface authIsAuth {
    type: authActionTypes.AUTH_IS_AUTH,
    payload: boolean
}

export interface authSetUserAction {
    type: authActionTypes.AUTH_SET_USER,
    payload: IUser
}

export type authActions = authIsLoadingAction | authErrorAction | authIsAuth | authSetUserAction