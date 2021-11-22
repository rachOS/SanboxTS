import { FoodCategory } from "./FoodCategory";
import { FoodGroup } from "./FoodGroup";
import { ICalcKCals } from "./ICalcKCals";
import { IFood } from "./IFood";
import { IMacroNutriment } from "./IMacroNutriment";

type MacronutriementType = {
    P: number;
    L: number;
    G: number;
    B: number;
}

export default class Food implements ICalcKCals, IFood, IMacroNutriment {

    constructor(
        public name: string = "",
        public id: number = 0,
        public unitMeasure: string = "",
        public category: FoodCategory = FoodCategory.Vegetable,
        public group: FoodGroup = FoodGroup.Vegetable,
        public macronutriements: MacronutriementType = {
            P: 0,
            L: 0,
            G: 0,
            B: 0,
        },
        public Kcal: number = 0
    ) { }


    calcKcal(): number {
        throw new Error("Method not implemented.");
    }
}