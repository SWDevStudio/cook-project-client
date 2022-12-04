import HttpService from "../../assets/service/HttpService";
import {AxiosResponse} from "axios";
import {AuthDto} from "./dto/AuthDto";

export default class AuthService {
    static instance: AuthService = new AuthService()
    private $http: HttpService = HttpService.instance

    async login(user: AuthDto): Promise<void> {
        const {data}: AxiosResponse = await this.$http.post('/auth/local', {
            identifier: user.email,
            password: user.password
        })

        const newToken = `Bearer ${data.jwt}`
        this.$http.updateHeader('Authorization', newToken)
        this.saveToken(newToken)
    }

    saveToken(token: string) {
        window.localStorage.setItem('jwt', token)
    }
}