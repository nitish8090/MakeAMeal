import Comment from "./Comment.interface"
import CookingStep from "./CookingStep.interface"
import Ingredients from "./Ingredients.interface"

export default interface Recipe {
    id: number
    name: string
    cover: string
    ingredients: Ingredients[]
    cooking_steps: CookingStep[]
    comments: Comment[]
}