import HttpService from "@/assets/service/HttpService";
import {IngredientCreateDto, IngredientDto} from "@/entities/ingredient/dto/IngredientDto";

export default class IngredientService {
    static instance: IngredientService = new IngredientService()
    private $http = HttpService.instance

    async loadAll(): Promise<IngredientDto[]> {
        const {data} = await this.$http.get('/ingredients')

        return data.data
    }

    async create(ingredientDto: IngredientCreateDto) {
        const {data} = await this.$http.post('/ingredients')
        return data.data
    }
}