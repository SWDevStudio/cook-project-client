import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

export default class HttpModule {
    static instance = new HttpModule()
    axios: AxiosInstance

    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:1337/api'
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
        this.axios.defaults.headers.common[name] = value
    }
}