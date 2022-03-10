export interface IUser {
    id: string,
    username: string,
    password: string,
    productInCart: string[]
    productInFavorites: string[]
}

export interface IAuthInfoState {
    username: string,
    password: string,
}