import Food from "./Food";
import { ICalcKCals } from "./ICalcKCals";
import { IMacroNutriment } from "./IMacroNutriment";
import Recipe from "./Recipe";

export default class Lunch<LunchType, FoodType> implements IMacroNutriment, ICalcKCals {
    public get P(): number {
        return this._P;
    }
    public set P(value: number) {
        Object.assign(this._P, value)
    }
    public get Kcal(): number {
        return this._Kcal;
    }

    public get macronutriements(): IMacroNutriment["macronutriements"] {
        return this._macronutriements;
    }
    public set macronutriements(value: IMacroNutriment["macronutriements"]) {
        this._macronutriements = value;
    }
    constructor(
        // private _recipe: Array<Recipe> = [new Recipe()],
        private readonly _Kcal: number = 0,
        private readonly _P: number = 0,
        public L: number = 0,
        public G: number = 0,
        public B: number = 0,
        private _macronutriements: IMacroNutriment["macronutriements"]) { }


    calcKcal(): number {
        throw new Error("Method not implemented.");
    }
}

const t = new Lunch<"test", "test">(1, 2, 2, 2, 2, { P: 2, L: 2, G: 2, B: 3 })
t.P = 34