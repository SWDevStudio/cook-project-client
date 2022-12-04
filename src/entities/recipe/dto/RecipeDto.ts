export interface RecipeDto {
    id: number
    attributes: {
        name: string
        user: object
        ingredients: object
        image: {
            data: { attributes: { url: string } }
        } | null
        description: string
        steps: RecipeStep[]
    }
}

export interface RecipeStep {
    description: string
    image: string
    order: number
}