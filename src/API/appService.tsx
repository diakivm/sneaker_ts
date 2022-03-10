import axios from "axios";
import {IUser} from "../models/IUser";


export default class appService {

    static async getProducts(page: number = 1, limit: number = 10) {
        const response = await axios.get(`https://61d3436eb4c10c001712b8b8.mockapi.io/products`, {
            params: {
                page,
                limit
            }
        })
        return response
    }

    static async getProductById(id: string) {
        const response = await axios.get(`https://61d3436eb4c10c001712b8b8.mockapi.io/products/${id}`)
        console.log(response)
        return response
    }

    static async getUsers() {
        const response = await axios.get(`https://61d3436eb4c10c001712b8b8.mockapi.io/user`)
        return response
    }

    static async putUser(user: IUser) {
        const response = await axios.put(`https://61d3436eb4c10c001712b8b8.mockapi.io/user/${user.id}`,user)
        return response
    }

}