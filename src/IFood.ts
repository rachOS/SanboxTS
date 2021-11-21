import { FoodCategory } from "./FoodCategory";
import { FoodGroup } from "./FoodGroup";
import { IMacroNutriment } from "./IMacroNutriment";

export interface IFood extends IMacroNutriment{
    name: string,
    id: number,
    unitMeasure: string
    category: FoodCategory
    group: FoodGroup
}