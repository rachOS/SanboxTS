import { ICalcKCals } from './ICalcKCals';
import { IMacroNutriment } from './IMacroNutriment';
import Food from './Food';

export default class Recipe implements ICalcKCals, IMacroNutriment {
  constructor(
    public ingredients: Array<Food>,
    public Kcal: number = 0,
    public macronutriements: {
      P: number;
      L: number;
      G: number;
      B: number;
    } = {
      P: 0,
      L: 0,
      G: 0,
      B: 0,
    }
  ) {}

  calcKcal(): number {
    throw new Error('Method not implemented.');
  }
}

const banana: Food = new Food();

const ingredients: Array<Food> = new Array<Food>();
ingredients.push(banana);
const breakFast: Recipe = new Recipe(ingredients);
console.log(breakFast);
