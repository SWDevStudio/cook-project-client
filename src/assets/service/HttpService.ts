import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import AuthService from "@/entities/auth/AuthService";

export default class HttpService {
    static instance = new HttpService()

    baseURL: string = 'http://localhost:1337'

    private axios: AxiosInstance

    constructor() {
        this.axios = axios.create({
            baseURL: this.baseURL + '/api',
            headers: {
                'Authorization': window.localStorage.getItem('jwt')
            },
            params: {
                populate: '*'
            }
        })
    }

    get(url: string, config?: AxiosRequestConfig) {
        return this.axios.get(url, config)
    }

    post(url: string, data?: object, config?: AxiosRequestConfig) {
        return this.axios.post(url, data, config)
    }

    put(url: string, data?: object, config?: AxiosRequestConfig) {
        return this.axios.put(url, data, config)
    }

    patch(url: string, data?: object, config?: AxiosRequestConfig) {
        return this.axios.patch(url, data, config)
    }

    updateHeader(name: string, value: string) {
        console.log(name,value)
        this.axios.defaults.headers.common[name] = value
    }
}