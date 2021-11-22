import Food from "./Food";
import { ICalcKCals } from "./ICalcKCals";
import { IMacroNutriment } from "./IMacroNutriment";
import Recipe from "./Recipe";

export default class Lunch<LunchType, FoodType> implements IMacroNutriment, ICalcKCals {
    constructor(
        public recipe: Array<Recipe<LunchType> | FoodType>,
        public Kcal: number,
        public P: number,
        public L: number,
        public G: number,
        public B: number) { }

    calcKcal(): void {
        throw new Error("Method not implemented.");
    }
}