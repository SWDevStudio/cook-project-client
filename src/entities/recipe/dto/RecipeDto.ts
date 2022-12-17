import {StrapiImage} from "@/entities/types/StrapiImage";
import {IngredientDto} from "@/entities/ingredient/dto/IngredientDto";

export interface RecipeDto {
    id: number
    attributes: {
        name: string
        user: object
        ingredients: StrapiWrapper<IngredientDto[]>
        image: StrapiImage,
        description: string
        steps: RecipeStep[]
    }
}

export interface RecipeStep {
    description: string
    image: StrapiImage
    order: number
}