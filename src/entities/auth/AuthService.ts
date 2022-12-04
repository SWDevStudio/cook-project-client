import HttpModule from "../../assets/service/HttpService";
import {AxiosResponse} from "axios";
import {AuthDto} from "./dto/AuthDto";

export default class AuthService {
    static instance: AuthService = new AuthService()
    private $http: HttpModule = HttpModule.instance

    async login(user: AuthDto): Promise<void> {
        const {data}: AxiosResponse = await this.$http.post('/auth/local', {
            identifier: user.email,
            password: user.password
        })


        this.$http.updateHeader('Authorization', `Bearer ${data.jwt}`)
    }
}