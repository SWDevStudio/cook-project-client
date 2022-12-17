import {WeightIngredient} from "@/entities/ingredient/types";
import {StrapiImage} from "@/entities/types/StrapiImage";

export interface IngredientDto {
    id: number,
    attributes: {
        name: string,
        weightType: WeightIngredient,
        weight: number,
        image: StrapiImage
    }
}