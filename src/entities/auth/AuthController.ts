import AuthService from "./AuthService";
import {AuthDto} from "./dto/AuthDto";

export class AuthController {
    static instance: AuthController = new AuthController()
    private authService = AuthService.instance

    async login(user: AuthDto): Promise<void> {
        if (!user || !user.email || !user.password)
            throw new Error('Нет данных для авторизации пользователя!')
        await this.authService.login(user)
    }
}