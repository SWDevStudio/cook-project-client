import {StrapiImage} from "@/entities/types/StrapiImage";
import {IngredientDto} from "@/entities/ingredient/dto/IngredientDto";
import {WeightIngredient} from "@/entities/ingredient/types";

export interface RecipeDto {
    id: number
    attributes: {
        name: string
        user: object
        ingredients: {
            id: number
            weight: number
            weightType: WeightIngredient
            ingredient: StrapiWrapper<IngredientDto>
        }
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

export interface RecipeCreateDto {
    name: string
    ingredients: number[] // Id
    description: string

    steps: {
        description: string,
        order: number
    }[]
}