import HttpService from "@/assets/service/HttpService";
import {RecipeDto} from "@/entities/recipe/dto/RecipeDto";

export default class RecipeService {
    static instance: RecipeService = new RecipeService()
    private $http = HttpService.instance

    async loadAll(): Promise<RecipeDto[]> {
        const {data}: {data: {data: RecipeDto[]}} = await this.$http.get('/recipes')
        return data.data
    }

    async load(id: number) {
        const {data}: {data: {data: RecipeDto}} = await this.$http.get('/recipes/' + id)
        return data.data
    }
}